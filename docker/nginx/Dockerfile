FROM nginx:1.27.4-bookworm

RUN apt update && apt install -y inotify-tools

COPY watch-and-reload.sh /watch-and-reload.sh
CMD nginx -g 'daemon off;' & bash /watch-and-reload.sh