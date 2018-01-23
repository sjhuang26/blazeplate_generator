# Create image based on the official Node image from the dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Get all the code needed to run the app
COPY app.js /usr/src/app
COPY dist /usr/src/app/public

# Install dependecies
RUN npm install

# Build the client application
RUN npm build


# Serve the app
CMD ["npm", "start"]
