import http.server
import logging
import csv
import os
import re

logging.basicConfig(level=logging.INFO)

req_dir = os.path.realpath("output/")
req_404 = "404.req"
req_honey = "honey.req"


def _is_path_safe(path, safe_dir):
    return os.path.commonprefix((os.path.realpath(path), safe_dir)) == safe_dir


class RawHTTPResponseHandler(http.server.BaseHTTPRequestHandler):
    def _sendfile(self, file):
        with open(file, "rb") as f:
            self.wfile.write(f.read())

    def do_GET(self):
        """
        example: '/cgi-bin/nas_sharing.cgi?user=messagebus&passwd=&cmd=15&system=<BASE64_CMD>'
        """

        try:
            file_path = os.path.join(req_dir, self.path.lstrip("/"))

            if self.path.startswith("/cgi-bin/nas_sharing.cgi"):
                with open("auth.log", "a") as f:
                    wr = csv.writer(f, quoting=csv.QUOTE_ALL)
                    wr.writerow([self.client_address[0], self.path])
                return self._sendfile(req_honey)

            elif not _is_path_safe(file_path, req_dir):
                raise Exception(f"Path traversal detected: {self.path}")

            elif os.path.isfile(file_path):
                self._sendfile(file_path)

            elif os.path.isdir(file_path) and os.path.isfile(
                os.path.join(file_path, "index.html")
            ):
                self._sendfile(os.path.join(file_path, "index.html"))

        except Exception as e:
            logging.warning(str(e))

        self._sendfile(req_404)

    def do_POST(self):
        self.do_GET()


if __name__ == "__main__":
    port = 80
    server_address = ("", port)
    httpd = http.server.HTTPServer(server_address, RawHTTPResponseHandler)
    logging.info(f"Server running on port {port}...")
    httpd.serve_forever()
