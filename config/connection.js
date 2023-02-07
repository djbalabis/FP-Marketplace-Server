const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/marketplace",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set('strictQuery', true);

module.exports = mongoose.connection;
