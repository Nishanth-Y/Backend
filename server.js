const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/upload", require("./routes/api/images"));
app.use("/api/profile", require("./routes/api/profile"));

app.get("/", (req, res) => {
  res.send("Express Started....");
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
