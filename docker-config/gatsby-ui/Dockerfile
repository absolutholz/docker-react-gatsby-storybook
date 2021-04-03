# https://valenciandigital.com/blog/containerizing-a-gatsbyjs-site-with-docker-compose

FROM node:alpine

RUN yarn global add gatsby-cli && \
	yarn global add @storybook/cli

EXPOSE 8000
EXPOSE 6006

WORKDIR /app
COPY ./app/package.json /app
COPY ./app/yarn.lock /app

RUN yarn install && yarn cache clean
COPY . /app

CMD ["yarn", "develop"]
