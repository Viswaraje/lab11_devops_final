// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/status", (req, res) => {
  res.json({ status: "OK", message: "Node.js REST API is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
