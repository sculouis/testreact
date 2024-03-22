# 第一階段：建置React應用程式
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
COPY public ./public

RUN npm run build

# 第二階段：設定nginx作為web伺服器並提供React應用程式的靜態檔案
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
