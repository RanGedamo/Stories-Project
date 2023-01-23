const mongoose = require("mongoose");
const schema = mongoose.Schema;

const groupsSchema = schema({
  groupName: { type: String, required: true },
  description: { type: String, required: true },
  managers:[{ type: schema.Types.ObjectId, ref: "user" }],
  enteryQuistions: [
    {
      quistion: { type: String, required: true },
      correctAnswer: { type: Boolean, required: true, default: false },
    }
  ],
  users: [{ type: schema.Types.ObjectId, ref: "user" }],
  events: [{ type: schema.Types.ObjectId, ref: "event" }],
  avatar: { type: String},
});

module.exports=mongoose.model("group", groupsSchema);