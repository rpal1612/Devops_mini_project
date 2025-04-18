# Use Nginx to serve static content
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your project files into Nginx's web directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
