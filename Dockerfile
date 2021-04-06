## NODE
FROM node:14.5.0-stretch as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm run build -- --prod
RUN node --max-old-space-size=16000 ./node_modules/@angular/cli/bin/ng build --prod

## NGINX
FROM nginx:alpine

### CHANGE /usr/src/app/dist/survey-app TO /usr/src/app/<distributable file path>
COPY --from=node /usr/src/app/dist/tacpoint-webui /usr/share/nginx/html


COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
RUN apk add --update tzdata
ENV TZ=America/New_York
RUN rm -rf /var/cache/apk/*