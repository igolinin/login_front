FROM node:9.6.1 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

RUN cp -r /usr/src/app/build /usr/src/build
RUN rm -rf /usr/src/app
RUN mkdir -p /usr/src/app

RUN cp -r /usr/src/build /usr/src/app

WORKDIR /usr/src/app
EXPOSE 8080
RUN  npm install -g serve
CMD ["serve", "-s", "build", "-p", "8080"]