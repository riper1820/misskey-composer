FROM nginx:1.31.0-trixie

RUN apt update && apt install -y inotify-tools

COPY watch-and-reload.sh /watch-and-reload.sh
CMD ["nginx", "-g", "daemon off;"]
