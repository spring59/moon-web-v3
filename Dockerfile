FROM spring59/alpine-amd-nginx:1.0

COPY dist/ /opt/nginx/html/

COPY default.conf /opt/nginx/conf.d

