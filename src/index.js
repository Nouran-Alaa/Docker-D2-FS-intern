require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const usersRouter = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/node_users_db";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ up: true }));
app.use("/api/users", usersRouter);

connectDB(MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});

// graceful shutdown
process.on("SIGINT", () => process.exit(0));
