# Use the official Node.js image.
FROM node:18

# Create and set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the application's port.
EXPOSE 5000

# Start the application.
CMD ["npm", "start"]
