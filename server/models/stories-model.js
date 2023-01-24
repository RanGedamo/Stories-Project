const mongoose = require("mongoose");
const schema = mongoose.Schema;

const storiesSchema = schema({
  creator: { type: schema.Types.ObjectId, ref: "user" },
  group: { type: schema.Types.ObjectId, ref: "group" },
  comment: [{
      commenter: { type: schema.Types.ObjectId, ref: "user", required: true },
      commentContent: { type: String, required: true },
    }],
    file:{type:String, required:true}
}, { timestamps: true });

module.exports = mongoose.model("story", storiesSchema);
