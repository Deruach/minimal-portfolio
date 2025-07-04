FROM node:lts-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["npm", "run", "dev"]
