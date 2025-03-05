# Use Node.js as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Nodemon globally for development
RUN npm install -g nodemon

# Copy the entire project (excluding files in .dockerignore)
COPY . .


# Start the backend with Nodemon for auto-reloading
CMD ["npm", "run", "dev", "--", "--host"]