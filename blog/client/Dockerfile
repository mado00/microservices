# Specify base image
FROM node:alpine
# Set the working directory to '/app' in the container. All following commands will be issued relative to this dir
WORKDIR /app
# Copy over the package.jason file
COPY package.json ./
# Install all dependencies
RUN npm install
# Copy over all our remaining source
COPY ./ ./
# Set the command to run when the container start up
CMD ["npm", "start"]
