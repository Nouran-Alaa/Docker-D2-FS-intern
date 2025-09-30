# Node Users CRUD App 🐳

This project is a simple **Node.js + Express + Mongoose** CRUD API for managing users.
It runs in **Docker** with `docker-compose`, and supports either a **local MongoDB container** or an external **MongoDB Atlas cluster**.

---

## 🚀 Setup & Run

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/node-users-app.git
cd node-users-app
```

### 2. Configure environment

Copy the example env file:

```bash
cp .env.example .env
```

Edit `.env` with either:

#### Option A – Use local MongoDB (included in docker-compose)

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/usersdb
```

#### Option B – Use MongoDB Atlas

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/usersdb
```

⚠️ If using Atlas, make sure your IP (or 0.0.0.0/0 for dev) is whitelisted in **Network Access**.

---

### 3. Run with Docker Compose

```bash
docker-compose up --build -d
```

Check running containers:

```bash
docker ps
```

---

### 4. Test API with Postman

Base URL:

```
http://localhost:3000/api/users
```

Endpoints:

- **GET** `/api/users` → list all users
- **POST** `/api/users` → create a new user
  Example body:

  ```json
  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

- **GET** `/api/users/:id` → get user by ID
- **PUT** `/api/users/:id` → update user
- **DELETE** `/api/users/:id` → delete user

---

### 5. Stop the containers

```bash
docker-compose down
```

---
