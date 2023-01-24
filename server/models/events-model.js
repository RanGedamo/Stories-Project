const mongoose = require("mongoose");
const schema = mongoose.Schema;

const eventsSchema = schema({
  eventName: { type: String, required: true },
  location:  {
    address: {
      type: String,
      required: true,
    },
    lat: { 
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  description: { type: String, required: true },
  participates: [{ type: schema.Types.ObjectId, ref: "user" }],
  eventDate: { type: String, required: true },
  group:{ type: schema.Types.ObjectId, ref: "group" }
}, { timestamps: true });
 module.exports=mongoose.model("event", eventsSchema);