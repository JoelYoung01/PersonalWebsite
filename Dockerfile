# start the builder
FROM node:lts as builder

# set working directory to the app root
WORKDIR /app

# copy all the dev files over
COPY . .

# install pnpm with npm
RUN npm i -g pnpm

# do an initial install
RUN pnpm i \
   --frozen-lockfile \
   --prefer-offline

# build yarn project
RUN pnpm build

# remove nonprod dependencies
RUN rm -rf node_modules && \
   NODE_ENV=production pnpm i \
   --prefer-offline \
   --P

# start node container
FROM node:lts

# set working directory as /app
WORKDIR /app

# grab files resulting from prod builder
COPY --from=builder /app/dist /app/dist

# get the js file that starts the express server
COPY --from=builder /app/expressStartScript.ts /app

RUN npm i express

# set ip and port info
ENV HOST 0.0.0.0
EXPOSE 3000

# start project
CMD [ "node", "expressStartScript.ts" ]