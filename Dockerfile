FROM nginx:stable-alpine

COPY dist/ /opt/nginx/html/

COPY default.conf /etc/nginx/conf.d


# 

