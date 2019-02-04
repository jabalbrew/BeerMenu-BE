FROM node:10.14-alpine

EXPOSE 3000

COPY beermenuAPI/package.json package.json

RUN npm install

COPY beermenuAPI/ .

RUN npm run build

CMD ["npm", "start" ]