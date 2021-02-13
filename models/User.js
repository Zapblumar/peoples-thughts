const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required",
  },

  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/],
  },

  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "thoughts",
  },

  friends: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = model("User", UserSchema);

module.exports = User;
