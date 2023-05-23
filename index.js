const express = require("express")
// const { mongo, default: mongoose } = require("mongoose")
require("dotenv").config({path:"./.env"})
const mongoose= require("mongoose")
mongoose.connect(process.env.MONGO_URL)
const app = express()

// BODY PARSER
app.use(express.json())

app.use("/api/user", require("./routes/userRouter"))

const PORT = process.env.PORT || 5000

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
    app.listen(PORT, console.log(`http://localhost:${PORT}`))
})
