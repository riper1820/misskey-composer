ARG BASE_IMAGE_TAG=v3.2.0
FROM certbot/dns-cloudflare:${BASE_IMAGE_TAG}

COPY auto-renew.sh /auto-renew.sh
RUN chmod +x /auto-renew.sh

ENTRYPOINT /auto-renew.sh