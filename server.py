import docker

from urllib.parse import parse_qs
from urllib.parse import urlparse
from datetime import datetime
import http.server
import logging
import base64
import time
import csv
import os
import re

logging.basicConfig(level=logging.INFO)

req_dir = os.path.realpath("output/")
req_404 = "404.req"
req_honey = "honey.req"

PORT = 80 if os.getuid() == 0 else 8080


def _is_path_safe(path, safe_dir):
    return os.path.commonprefix((os.path.realpath(path), safe_dir)) == safe_dir


def _remove_prefix(text, prefix):
    if text.startswith(prefix):
        return text[len(prefix) :]
    return text


class RawHTTPResponseHandler(http.server.BaseHTTPRequestHandler):
    def _sendfile(self, file):
        date = datetime.now().strftime("%a, %d %b %Y %H:%M:%S GMT")

        with open(file, "rb") as f:
            for l in f:
                if l.startswith(b"Date:"):
                    l = b"Date: " + date.encode() + b"\n"
                self.wfile.write(l)

    def _handle_honey(self):
        command_output = b""
        try:
            query = parse_qs(urlparse(self.path).query)
            logging.info(query)

            with open("auth.log", "a") as f:
                wr = csv.writer(f, quoting=csv.QUOTE_ALL)
                wr.writerow(
                    [
                        int(time.time()),
                        self.client_address[0],
                        self.headers,
                        self.path,
                    ]
                )

            if "system" in query and len(query["system"]):
                command = base64.b64decode(query["system"][0])
                command = command.split(b"\n")[0].decode()

                command_output = container.exec_run(["bash", "-c", command]).output
                command_output = _remove_prefix(command_output, b"bash: ")

        except Exception as e:
            logging.warning(e)

        with open(req_honey, "rb") as f:
            self.wfile.write(f.read().replace(b"<COMMAND_OUTPUT>\n", command_output))

    def do_GET(self):
        """
        example: '/cgi-bin/nas_sharing.cgi?user=messagebus&passwd=&cmd=15&system=<BASE64_CMD>'
        """

        try:
            file_path = os.path.join(req_dir, self.path.lstrip("/"))
            logging.info((self.client_address[0], self.path))

            if self.path.startswith("/cgi-bin/nas_sharing.cgi"):
                return self._handle_honey()

            elif not _is_path_safe(file_path, req_dir):
                raise Exception(f"Path traversal detected: {self.path}")

            elif os.path.isfile(file_path):
                return self._sendfile(file_path)

            elif os.path.isdir(file_path) and os.path.isfile(
                os.path.join(file_path, "index.html")
            ):
                return self._sendfile(os.path.join(file_path, "index.html"))

        except Exception as e:
            logging.warning(str(e))

        self._sendfile(req_404)

    def do_POST(self):
        self.do_GET()


if __name__ == "__main__":
    logging.info("Starting honeypot")

    client = docker.from_env()
    container = client.containers.run(
        "debian:jessie-slim", remove=True, detach=True, tty=True
    )

    while container.status != "running":
        container.reload()

    container.exec_run(["rm", "/.dockerenv"])

    server_address = ("", PORT)
    httpd = http.server.HTTPServer(server_address, RawHTTPResponseHandler)
    logging.info(f"Server running on port {PORT}...")
    httpd.serve_forever()
