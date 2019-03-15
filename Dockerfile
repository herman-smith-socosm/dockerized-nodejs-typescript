FROM node

# Create app directory
RUN mkdir -p /src
WORKDIR /src

# Install app dependencies
COPY package.json /src
COPY package-lock.json /src
RUN npm i

# Bundle app source
COPY . /src
RUN npm run build-ts

EXPOSE 80
CMD [ "npm", "start" ]