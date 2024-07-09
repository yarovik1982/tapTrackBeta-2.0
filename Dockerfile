FROM node:20.5.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force json-server --save-dev
COPY . .
CMD ["npm", "run", "server"]