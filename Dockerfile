FROM node:20.5.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g http-server
COPY . .
CMD [ "http-server", "dist", "dev", "build", "preview" ]