const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Yoooo World!" });
});
app.listen(PORT, () => {
  console.log(`express server running on port ${PORT}`);
});