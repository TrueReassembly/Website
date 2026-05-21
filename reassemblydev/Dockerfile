# Step 1: Build the Vite application
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve via Nginx
FROM nginx:alpine
# Copy our custom configuration
COPY nginx.conf /etc/nginx/nginx.conf
# Copy the built Vite assets from Step 1 into Nginx's serving directory
COPY --from=build /app/dist /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]