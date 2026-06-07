# Blog Platform with Comments

A full-stack MERN Blog Platform where users can register, log in, create blog posts, and interact through comments.

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Blog Posts

* Create Blog Posts
* View All Posts
* View Single Post
* User Dashboard
* My Posts Section

### Comments

* Add Comments to Posts
* View Comments
* User Interaction

### UI

* Responsive Design
* React Router Navigation
* Tailwind CSS Styling
* Modern Dashboard Interface

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

---

## 📁 Project Structure

```text
blog-platform-with-comments
│
├── blog-frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── blog-backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/blog-platform-with-comments.git
```

### Backend Setup

```bash
cd blog-backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd blog-frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside `blog-backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🌐 API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Posts

* GET `/api/posts`
* GET `/api/posts/:id`
* POST `/api/posts`

### Comments

* GET `/api/comments/:postId`
* POST `/api/comments/:postId`

---

## 🎯 Learning Outcomes

* Full-Stack MERN Development
* RESTful API Development
* MongoDB Database Integration
* JWT Authentication
* React Frontend Development
* Tailwind CSS UI Design

---

## 👨‍💻 Author

**Revathi Veeraboyani**

Built as part of a Full-Stack Development Internship Project.
