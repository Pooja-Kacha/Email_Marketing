# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app


# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 5000


# Command to run the application
CMD ["node", "index.js"]
