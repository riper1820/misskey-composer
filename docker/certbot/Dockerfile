FROM certbot/dns-cloudflare:v5.8.0

COPY auto-renew.sh /auto-renew.sh
RUN chmod +x /auto-renew.sh

ENTRYPOINT /auto-renew.sh
