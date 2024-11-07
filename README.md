Job Application Portal
A Job Application Portal with secure JWT-based authentication and role-based authorization. This application allows administrators to manage job listings and users to view and filter job listings. Built using Spring Boot (with Spring Security, JPA) for the backend, and React (using Axios, Context API, and React Hooks) for the frontend.

Table of Contents
Features
Tech Stack
Getting Started
Backend Setup
Frontend Setup
API Documentation
Authentication Endpoints
Job Management Endpoints
License
Features
JWT Token-Based Authentication: Provides secure login, token generation, and session management.
Role-Based Authorization: Admins can manage job listings; users can view job listings.
CRUD Operations for Jobs: Admins can create, read, update, and delete job listings.
Job Filtering and Pagination: Users can apply filters and pagination on job listings.
Frontend State Management: React Context API and hooks manage user sessions and application state efficiently.
Tech Stack
Backend: Spring Boot, Spring Security, Spring Data JPA, JWT
Frontend: React, Axios, Context API, React Hooks
Database: MySQL
Getting Started
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/job-application-portal.git
cd job-application-portal/backend
Configure Database: Update application.properties with your database credentials.

properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
Run the Application:

bash
Copy code
mvn spring-boot:run
Frontend Setup
Navigate to Frontend Folder:

bash
Copy code
cd ../frontend
Install Dependencies:

bash
Copy code
npm install
Configure API Base URL: Update the Axios base URL in your React project (usually in src/config.js):

javascript
Copy code
export const API_BASE_URL = "http://localhost:8080/api";
Start the Frontend Application:

bash
Copy code
npm start
API Documentation
Authentication Endpoints
POST /api/auth/register - Register a new user.
POST /api/auth/login - Login and receive a JWT token.
POST /api/auth/logout - Logout and invalidate the JWT token.
Job Management Endpoints
Admin Access
POST /api/jobs - Create a new job listing.
PUT /api/jobs/{id} - Update an existing job listing.
DELETE /api/jobs/{id} - Delete a job listing.
User/Admin Access
GET /api/jobs - List all jobs with pagination and filters.
GET /api/jobs/{id} - Get details of a specific job.
License
This project is licensed under the MIT License. See the LICENSE file for details.
