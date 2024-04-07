# honeypot-dlink-CVE-2024-3273
Quick and dirty honeypot for CVE-2024-3273.
This template can be used to setup a basic honeypot in ~10min.

**TL;DR:**
- Find a vulnerable D-Link NAS online (fofa, shodan, onyphe, ...).
- Clone it with the `wget_clone_website.sh`.
- Manual tinkering to make the honeypot more realistic (cloning isn't perfect so some files 404).
- Add rule matching the exploit path to log the request to a file.
- Save and run!

Files are downloaded with the `--save-headers` flag set (equivalent to `curl`'s `--include`) to mimic the headers the server we're masquarading as would send.

**Sources**:
- https://www.bleepingcomputer.com/news/security/over-92-000-exposed-d-link-nas-devices-have-a-backdoor-account/
- https://github.com/netsecfish/dlink
