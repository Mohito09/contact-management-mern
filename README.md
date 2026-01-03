# 📇 Contact Management Web App (MERN Stack)

A full-stack **Contact Management Web Application** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
The application allows users to add, view, sort, and delete contacts with persistent storage using MongoDB.

---

## 🚀 Live Demo

**Frontend (Vercel):**  
https://contact-management-mern.vercel.app

**Backend API (Render):**  
https://contact-backend-8v1o.onrender.com/api/contacts

---

## 🛠️ Tech Stack

### Frontend
- React (Create React App)
- Axios
- Tailwind CSS
- Deployed on **Vercel**

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Deployed on **Render**

---

## ✨ Features

- ➕ Add new contacts (Name, Email, Phone, Message)
- 📋 View all saved contacts
- 🔠 Contacts sorted alphabetically by name
- ❌ Delete contacts
- ✅ Form validation (required fields, numeric phone)
- 📦 Persistent data storage using MongoDB Atlas
- 🌐 Fully deployed frontend and backend

---
```md
## 📁 Project Structure

- backend/
  - models/
    - Contact.js
  - routes/
    - contactRoutes.js
  - server.js
  - .env.example
  - package.json

- frontend/
  - public/
  - src/
    - components/
      - ContactForm.js
      - ContactCard.js
    - App.js
    - index.js
    - index.css
  - tailwind.config.js
  - package.json

## ⚙️ Backend Setup (Local)

1. Navigate to backend folder:
   ```bash
   cd backend

2. Install dependencies:

npm install


3. Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


4. Start the backend server:

npm start

## ⚙️ Frontend Setup (Local)

1. Navigate to frontend folder:

cd frontend


2. Install dependencies:

npm install


3. Start the React application:

npm start

```

🔗 API Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/contacts`     | Fetch all contacts |
| POST   | `/api/contacts`     | Add a new contact  |
| DELETE | `/api/contacts/:id` | Delete a contact   |


📌 Note

This project was developed as part of an internship technical assessment, with a focus on functionality, clean code structure, and real-world deployment.
