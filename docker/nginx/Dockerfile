FROM nginx:1.30.6-trixie

RUN apt update && apt install -y inotify-tools

COPY watch-and-reload.sh /watch-and-reload.sh
CMD ["nginx", "-g", "daemon off;"]
