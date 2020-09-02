FROM nginx:1.17-alpine

COPY dist/ /usr/share/nginx/html

COPY ./.devops/nginx/ /etc/nginx/
