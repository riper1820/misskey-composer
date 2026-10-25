FROM certbot/dns-cloudflare:v3.2.0

COPY auto-renew.sh /auto-renew.sh
RUN chmod +x /auto-renew.sh

ENTRYPOINT /auto-renew.sh
