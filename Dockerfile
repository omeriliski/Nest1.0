#build
FROM node:16 as build
WORKDIR /nest_frontend
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

#serve
FROM fholzer/nginx-brotli:v1.12.2
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /nest_frontend/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx","-g","daemon off;"]
 