ARG BASE_IMAGE_TAG=1.27.4-bookworm
FROM nginx:${BASE_IMAGE_TAG}

RUN apt update && apt install -y inotify-tools

COPY watch-and-reload.sh /watch-and-reload.sh
CMD ["nginx", "-g", "daemon off;"]