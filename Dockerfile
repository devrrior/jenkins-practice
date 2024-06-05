FROM node:20.14.0-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "server"]