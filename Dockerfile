FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json package-lock*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]