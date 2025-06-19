FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
RUN npm install -g @nestjs/cli
RUN yarn install --production

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start:with-migrate"]