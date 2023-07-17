const express = require("express")
require('dotenv').config();
const cors=require('cors')
const {connection} =require("./config/db.js");
const { userRouter } = require("./route/user.route.js");
const { auth } = require("./middleware/auth.middleware.js");
const { quizRouter } = require("./route/quiz.routes.js");
const app = express();
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/users",userRouter)
app.use(auth)
app.use("/quizes",quizRouter)

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
    } catch (err) {
        console.log(err.mmessage)
    }
    console.log("Connected to server")
})
