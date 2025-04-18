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
