FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
RUN echo $WORKDIR
ADD package.json /tmp/package.json
RUN npm install -g npm && npm install -g express mocha
RUN cd /tmp && npm install
RUN cp -a /tmp/node_modules /usr/src/app

# Bundle app source
COPY . /usr/src/app

EXPOSE 4567
CMD [ "npm", "start" ]
