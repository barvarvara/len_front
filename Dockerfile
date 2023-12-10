FROM node:alpine

WORKDIR /len_front

ENV PATH /len_front/node_modules/ .bin:$PATH

COPY package.json ./
COPY package-lock.json ./

ENV NODE_ENV=production

RUN npm install \
    npm install react-scripts@3.4.1 -g --silent \
    npm install axios classnames --save


COPY . ./

CMD ["npm", "start"]