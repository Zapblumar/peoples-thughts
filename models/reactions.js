const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  reactions: {
    type: Schema.Types.ObjectId,
    ref: "reactions",
  },

  reactionBody: {
    type: String,
    required: "needs a body",
    maxlength: "280",
  },

  userName: {
    type: String,
    required: "need username",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
