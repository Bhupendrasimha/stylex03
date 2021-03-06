const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema(
  {
      id:{
          type:Number,
          required:true
      },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Users", usersSchema);
