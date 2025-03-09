#!/bin/sh

# WEB_HOST, MEDIA_HOST, CERTBOT_EMAIL should be set in the environment
if [ -z "${WEB_HOST}" ]; then
  echo "env variable WEB_HOST is not set"
  exit 1
fi
if [ -z "${MEDIA_HOST}" ]; then
  echo "env variable MEDIA_HOST is not set"
  exit 1
fi
if [ -z "${CERTBOT_EMAIL}" ]; then
  echo "env variable CERTBOT_EMAIL is not set"
  exit 1
fi

# change permissions of the cloudflare.ini file
chmod 600 /etc/cloudflare/cloudflare.ini

while true; do
  echo "Renewing or obtaining certificates"
  certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini -d ${WEB_HOST} -d ${MEDIA_HOST} --non-interactive --agree-tos --email ${CERTBOT_EMAIL} --dns-cloudflare-propagation-seconds 60
  sleep 12h
done