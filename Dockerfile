FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /tmp/package.json
RUN npm install -g npm && cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Bundle app source
COPY . /usr/src/app

EXPOSE 4567
CMD [ "npm", "start" ]
