# Job Application Portal
A Job Application Portal with secure JWT-based authentication and role-based authorization. This application allows administrators to manage job listings and users to view and filter job listings. Built using Spring Boot (with Spring Security, JPA) for the backend, and React (using Axios, Context API, and React Hooks) for the frontend.

## Features
1. The user can login/register to the portal.
2. Users can view and apply for current job listings.
3. Users can filter out the jobs based on different filters(experience, role, type, experience).
4. Only Admin can view, create and update the jobs for the portal.
5. It has a User Management System with Admin/User roles.
6. It has a Token blacklisting mechanism implemented using Redis Cache(in Memory Storage).
7. It has a JWT token-based session management mechanism.
8. Only valid token users can access the APIs.

## Tech Stack
**Backend**: Spring Boot, Spring Security, Spring Data JPA,Redis Cache(using Lettuce), JWT , Database(PostgresSQL) </br>
**Frontend**: HTML, CSS, JavaScript, React, Axios, Context API, React Hooks.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## UI Pictures
### Login and SignUp Page
![image](https://github.com/user-attachments/assets/5378093b-a22e-4c61-a38c-b5991aeb78ff)
### Dashboard and Dashboard with Filter Applied
![dashboard](https://github.com/user-attachments/assets/ec12703b-cb11-4d0e-8a61-22347d2fc545)
### Job Form to add Jobs on the portal 
![jobForm](https://github.com/user-attachments/assets/c056f116-f74a-4dcc-bba1-311d60316844)

