# 🎓 Student Course Registration Portal (MERN Stack)

A full-stack web application built using the MERN stack that allows final-year students to apply for technical and non-technical courses. Admin users can manage applications, view student details, download biodata as PDF, and analyze course-wise statistics.

---

## 🚀 Project Overview

The Student Course Registration Portal is designed for college use.  
It enables:

- Students to apply for multiple courses
- Resume upload during registration
- Admin to manage and review applications
- Admin analytics dashboard with application summary

This project follows a clean full-stack architecture with separate frontend and backend folders.

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Pure CSS
- jsPDF (PDF generation)

### Backend (Planned / In Progress)
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (File Upload)
- ExcelJS (Excel Export)

---

## 👥 User Roles

### 👨‍🎓 Student
- Login with predefined credentials
- Select Technical or Non-Technical course
- Fill registration form
- Upload resume (PDF required)
- Submit application
- Receive success confirmation

### 👨‍💼 Admin
- Login with predefined credentials
- View course-wise student applications
- Search students by name or register number
- View complete student biodata
- Download biodata as PDF
- Download resume
- View analytics dashboard

---

## 🔄 Application Workflow

### Student Flow
1. Login
2. Select course category
3. Choose course
4. Fill registration form
5. Upload resume
6. Submit application
7. Success confirmation

---

### Admin Flow
1. Login
2. Select course category
3. View list of students applied
4. Search/filter students
5. View detailed student application
6. Download biodata PDF
7. View analytics dashboard

---

## 📊 Admin Features

- Total student count per course
- Search filtering
- Course-wise summary
- Download student biodata as PDF
- Resume download
- Clean dashboard layout

---

## 📁 Project Structure


student-course-portal/
│
├── client/ # React Frontend (Vite)
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Student/
│ │ │ └── Admin/
│ │ ├── components/
│ │ ├── context/
│ │ ├── services/
│ │ └── App.jsx
│
├── server/ # Node + Express Backend (Upcoming)
│
└── README.md