# Zoom Meeting SDK - Automated Group Discussion System

## Overview

This project is a full-stack web application that automates **Zoom meeting creation** and **student participant management** for group discussions, classes, interviews, or online sessions.

It includes:

* **Frontend:** React + Vite
* **Backend:** Node.js + Express
* **Database:** MySQL
* **File Upload:** Excel student list import
* **API Integration:** Zoom OAuth + Meeting Creation API

---

## Features

* Create Zoom meetings automatically
* Generate secure Zoom access token using Server-to-Server OAuth
* Start meeting from frontend
* Upload student records using Excel files (`.xlsx`)
* Store/manage student data in MySQL database
* Simple React user interface
* CORS enabled frontend-backend communication

---

## Project Structure

```text
zoom_meeting_sdk-main/
├── backend/
│   ├── index.js
│   ├── db.js
│   ├── uploadStudents.js
│   └── uploads/
├── zoom-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── gd_system.sql
└── package.json
```

---

## Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Node.js
* Express.js
* Multer
* MySQL2
* XLSX

### Third Party Service

* Zoom API

---

## Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/zoom_meeting_sdk-main.git
cd zoom_meeting_sdk-main
```

## 2. Install Backend Dependencies

```bash
npm install
```

## 3. Install Frontend Dependencies

```bash
cd zoom-frontend
npm install
```

## 4. Setup MySQL Database

* Create database in MySQL
* Import `gd_system.sql`

## 5. Configure Zoom Credentials

Update backend credentials in:

```js
backend/index.js
```

Add:

* Zoom Account ID
  n- Zoom Client ID
* Zoom Client Secret

> Recommended: Use `.env` file instead of hardcoding secrets.

---

## Run Project

### Start Backend

```bash
node backend/index.js
```

Backend runs on:
`http://localhost:5555`

### Start Frontend

```bash
cd zoom-frontend
npm run dev
```

Frontend runs on Vite local server.

---

## API Endpoints

### Create Zoom Meeting

```http
POST /start-meeting
```

Returns Zoom meeting details including join/start URL.

### Upload Students Excel File

```http
POST /upload-students
```

Upload form-data with key:
`file`



## Use Cases

* Online Group Discussion System
* College Viva Sessions
* Placement Mock Interviews
* Faculty Meetings
* Student Attendance Sessions



## Security Improvements Suggested

* Move credentials to `.env`
* Add authentication/login
* Validate uploaded files
* Use HTTPS in production
* Add role-based access control

## Future Enhancements

* Attendance tracking
* Email invitations
* Auto room assignment
* Dashboard analytics
* Meeting history logs
* Admin panel
## Author

Developed as an academic/full-stack project for automated meeting management.
## License

This project is for educational and learning purposes.
