const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    minlength: "1",
    maxlength: "280",
    required: "text is Required",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: "Username is Required",
  },
  reactions: {
    type: Schema.Types.ObjectId,
    ref: "reactions",
  },
});
