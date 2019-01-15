FROM node:9.6.1 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

FROM node:9.6.1-slim
RUN mkdir /usr/src/app
EXPOSE 8080
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/src/app/build
RUN  npm install -g serve
CMD ["serve", "-s", "build", "-p", "8080"]