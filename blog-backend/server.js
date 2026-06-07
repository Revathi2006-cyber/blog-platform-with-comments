const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.get("/", (req, res) => {
  res.send("Blog API Running");
});

const PORT = process.env.PORT || 5000;
app.get("/test", (req, res) => {
  res.json({
    message: "Server is working"
  });
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});