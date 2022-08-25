FROM node:12-alpine

RUN apk add git

RUN git clone --branch main https://github.com/InBordersHackathon/testRepository2

WORKDIR testRepository2/backend2

RUN npm i

EXPOSE 3002

ENTRYPOINT ["npm","run","start"]
