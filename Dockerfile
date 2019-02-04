FROM node:10.14-alpine

EXPOSE 3000

WORKDIR /beermenuAPI

COPY package.json package.json
RUN npm install

COPY . .


RUN npm run build

CMD ["npm", "start" ]