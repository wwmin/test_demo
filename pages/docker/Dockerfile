FROM node:9.11.1-alpine

RUN npm install -g http-server

WORKDIR /app

COPY . .

EXPOSE 8080
CMD ["http-server","."]
