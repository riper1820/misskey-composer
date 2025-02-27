#!/bin/bash

targets="/etc/nginx/conf.d/ /etc/letsencrypt"

while inotifywait -r -e modify,create,delete $targets; do
  echo "Reloading nginx"
  nginx -s reload
done