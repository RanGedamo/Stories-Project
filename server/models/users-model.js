const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersSchema = schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    groups: [{ type: schema.Types.ObjectId, ref: "group" }],
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dtcgejl11/image/upload/v1673277784/team_project_lawyers/gxi78yqf4eclrsncct3z.webp",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", usersSchema);
