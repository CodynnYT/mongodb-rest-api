# mongodb-rest-api

Source code for the Task Manager REST API built in the final section of the **MongoDB Complete Tutorial** on the Codynn YouTube channel.

A REST API built with Node.js, Express, and MongoDB demonstrating full CRUD operations using the official MongoDB Node.js driver — no Mongoose.

> 📺 **Watch the full tutorial** → [youtube.com/@Codynn](https://youtube.com/@Codynn)

---

## Stack

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Node.js Driver

---

## Project Structure

```
mongodb-rest-api/
├── routes/
│   └── tasks.js      # All task route handlers
├── db.js             # MongoDB connection (singleton)
├── server.js         # Express app entry point
├── .env              # Environment variables (not committed)
└── package.json
```

---

## Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/CodynnYT/mongodb-rest-api.git
cd mongodb-rest-api
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the root of the project:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskdb
```

Replace with your actual MongoDB Atlas connection string.

**4. Run the server**

```bash
node server.js
```

The API will be running at `http://localhost:3000`.

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a single task by ID |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## Example Request

**Create a task**

```http
POST http://localhost:3000/tasks
Content-Type: application/json

{
  "title": "Learn MongoDB",
  "priority": "high"
}
```

**Response**

```json
{
  "insertedId": "64f1a2b3c4d5e6f7a8b9c0d1"
}
```

---

## Related

- 📦 More course repos → [github.com/CodynnYT](https://github.com/CodynnYT)
- 🌐 Website → [codynn.com](https://codynn.com)
- 📺 Channel → [youtube.com/@Codynn](https://youtube.com/@CodynnAcademy)
