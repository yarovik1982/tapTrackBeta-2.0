# FROM node:20.5.0-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install -g http-server
# COPY . .
# CMD [ "http-server", "dist", "dev", "build", "preview" ]
# 
# -----------------------------------------------
# FROM node:20.5.0-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# CMD ["npm", "run", "start"]
# -----------------------------------------------------
   FROM node:20.5.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
