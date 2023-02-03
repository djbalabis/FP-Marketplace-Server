const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
  },
});
profileSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const PW = 10;
    this.password = await bcrypt.hash(this.password, PW);
  }
  next();
});
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const Profile = model("Profile", profileSchema);
module.exports = Profile;
