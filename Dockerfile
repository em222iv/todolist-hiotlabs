FROM nodesource/node:4.0

ADD package.json /usr/src/app
ADD server/ /usr/src/app

RUN npm install

CMD ["node","server.js"]
