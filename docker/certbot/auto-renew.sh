#!/bin/bash

# WEB_HOST and MEDIA_HOST should be set in the environment
if [ -z "${WEB_HOST}" ]; then
  echo "env variable WEB_HOST is not set"
  exit 1
fi
if [ -z "${MEDIA_HOST}" ]; then
  echo "env variable MEDIA_HOST is not set"
  exit 1
fi

while true; do
  echo "Renewing or obtaining certificates"
  certbot certonly --dns-cloudflare --dns-cloudflare-credentials /etc/cloudflare/cloudflare.ini -d ${WEB_HOST} -d ${MEDIA_HOST}
  sleep 12h
done