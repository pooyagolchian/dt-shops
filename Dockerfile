# build stage
FROM node:16.13.1-alpine as build-stage
WORKDIR /app
RUN apk add --update git
COPY package.json .
RUN npm install
COPY . .
RUN yarn build && yarn generate

# production stage
FROM httpd:2.4 as production-stage
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs/
EXPOSE 80