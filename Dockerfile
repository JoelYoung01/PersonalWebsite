# start the builder
FROM node:lts as builder

# set working directory to the app root
WORKDIR /app

# copy all the dev files over
COPY . .

# do an initial install
RUN yarn install \
   --prefer-offline \
   --frozen-lockfile \
   --non-interactive \
   --production=false

# build yarn project
RUN yarn build

# remove nonprod dependencies
RUN rm -rf node_modules && \
   NODE_ENV=production yarn install \
   --prefer-offline \
   --pure-lockfile \
   --non-interactive \
   --production=true

# start node container
FROM node:lts

# set working directory as /app
WORKDIR /app

# grab files resulting from prod builder
COPY --from=builder /app  .

# set ip and port info
ENV HOST 0.0.0.0
EXPOSE 3000

# start project
CMD [ "yarn", "start" ]