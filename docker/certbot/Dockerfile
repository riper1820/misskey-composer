FROM certbot/dns-cloudflare:v3.2.0

COPY auto-renew.sh /auto-renew.sh

ENTRYPOINT bash
CMD /auto-renew.sh