FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
