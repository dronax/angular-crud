FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g @angular/cli@17.3.2

RUN npm install --legacy-peer-deps

CMD [ "ng","serve","--host","0.0.0.0" ]