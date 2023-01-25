require("dotenv").config();
require("./DB");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const app = express();
const port= process.env.PORT

app.use(express.json({ extended: true })); 
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
 
const userRouter=require("./router/user-router")
const groupRouter=require("./router/group-router")
const eventRouter=require("./router/event-router")
const storyRouter=require("./router/story-router")
 
app.use("/users",userRouter)
app.use("/groups",groupRouter)
app.use("/events",eventRouter)
app.use("/stories",storyRouter)


// app.use("/user", require("./routes/userRouter"));


app.get("/", (req, res) => {
  res.send("server online "); 
});
app.listen(port, () => {
  console.log(`listen to port : ${port}, in http://localhost:${port}/`)
})