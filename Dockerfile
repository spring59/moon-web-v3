FROM nginx:stable-alpine

COPY dist/ /opt/nginx/html/

COPY default.conf /opt/nginx/conf.d

# 

