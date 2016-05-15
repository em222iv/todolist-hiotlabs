FROM nodesource/node:4.0

ADD package.json /usr/src/app
ADD server/ /usr/src/app

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]
