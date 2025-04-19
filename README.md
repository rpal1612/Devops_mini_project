# To-Do List Web App with CI/CD using Jenkins and Docker

## Project Description
The **To-Do List Web App** is a simple web-based application that allows users to create, read, update, and delete tasks (CRUD operations). This project demonstrates a **DevOps pipeline** that automates the building, testing, and deployment of the app using **Jenkins** and **Docker**. The goal of this project is to integrate Continuous Integration (CI), Continuous Testing (CT), and Continuous Deployment (CD) into a real-world application.

## CI/CT/CD Pipeline Flow

### Overview
- **CI (Continuous Integration)**: Automatically builds and tests the application every time new code is pushed to the GitHub repository.
- **CT (Continuous Testing)**: Ensures that the app is tested automatically each time the Docker container is created.
- **CD (Continuous Deployment)**: After passing tests, the Docker image is pushed to **DockerHub** for easy deployment.

### Pipeline Flow (Text Representation)

1. **Clone from GitHub**: Jenkins pulls the latest code from the GitHub repository.
2. **Build Docker Image**: Jenkins builds a new Docker image based on the `Dockerfile`.
3. **Test Docker Image**: Jenkins runs the Docker container and tests the app with a simple `curl` command to ensure it's functioning correctly.
4. **Push to DockerHub**: If the tests pass, Jenkins pushes the Docker image to DockerHub.

## Setup & Run Instructions

### Prerequisites

Before you begin, ensure that the following tools are installed:

- **Docker**: For containerizing the app.
- **Jenkins**: For automating the CI/CD pipeline.
- **Git**: For version control.
- **DockerHub account**: For storing the Docker image.

### Steps to Set Up the Project

1. **Clone the GitHub Repository**  
   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rpal1612/Devops_mini_project.git
   cd Devops_mini_project
   
2. **Build the Docker Image Locally**  
  Once you're in the project directory, build the Docker image manually using the following command:
   ```bash
   docker build -t riya1612/todo-static-app:latest .

3. **Test the Docker Image Locally**  
  After building the image, run the Docker container locally to test the app:

   ```bash
   docker run -d -p 8888:80 riya1612/todo-static-app:latest .
Open your browser and go to http://localhost:8888 to see the To-Do List app running.

### Set Up Jenkins CI/CD Pipeline

- Install Jenkins on your server (Ubuntu or any other OS).

- Install the required Jenkins plugins:

- Docker Pipeline Plugin

- Git Plugin

- Create a Jenkinsfile in the root directory of your repository to automate the process.

- Run the Jenkins Pipeline

- Set up a Jenkins job to pull the code from GitHub and trigger the pipeline automatically.

- Ensure Docker credentials are set in Jenkins to allow image pushing to DockerHub.


### Sample Test Output
Once the Docker container is running, you can test the app using the following curl command to verify if the To-Do List app is up and running:   
```bash
 curl -f http://localhost:8888 || (docker logs test-container && exit 1)
```
Expected output (if the app is running correctly):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <h1>Welcome to the To-Do List App!</h1>
    <!-- Application content here -->
</body>
</html>
```
### Docker Commands / Deployment Logs
 Here are some important Docker commands used in this project:
- Build Docker Image: Builds the image based on the Dockerfile.
```bash
docker build -t riya1612/todo-static-app:latest .
```
- Run Docker Image: Starts the Docker container on port 8888 and maps it to port 80 inside the container.
```bash
docker run -d -p 8888:80 riya1612/todo-static-app:latest
```
- Stop Docker Container: Stops the running container.
  ```bash
  docker stop test-container
  ```
- Remove Docker Container: Removes the stopped container.
  ```bash
  docker rm test-container
  ```
- Push Docker Image to DockerHub: Pushes the image to DockerHub.
```bash
docker push riya1612/todo-static-app:latest
```

### Team Members and Responsibilities

- **Riya** (Roll Number: 22101B0027):
  - GitHub repository management
  - Dockerfile creation
  - Jenkins pipeline setup
  - DockerHub integration

- **Atharv Patil**(Roll number : 22101B0039):
  - Front-end development (HTML/CSS/JS)
  - Application testing

- **Ganesh Choudhary**(Roll number: 22101B0072):
  - Setting up Jenkins and Docker environments
  - Integration of Jenkins with GitHub and DockerHub
  - Continuous testing and debugging


### Pipeline Flow (Diagram Representation)
You can visualize the flow with this basic diagram:

```plaintext
+------------------+        +-------------------+        +------------------------+
|  GitHub (Code)   |  ----> |   Jenkins (CI/CD) |  ----> |   DockerHub (Deployment)|
+------------------+        +-------------------+        +------------------------+
       |                           |                           |
       v                           v                           v
+-------------------+     +---------------------+        +------------------+
|  Pull Latest Code |     |  Build Docker Image |        |  Push Docker Image |
+-------------------+     +---------------------+        +------------------+
                                |
                                v
                       +--------------------+
                       |  Test Docker Image |
                       +--------------------+
