import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://localhost/technigo-forum", { useMongoClient: true })

mongoose.Promise = Promise

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb")
})

mongoose.connection.on("error", err => {
  console.error("connection error:", err)
})
const topic = mongoose.model("topic", {
  //attributes for questions here.
  name: String,
  email: String,
  headline: String,
  content: String,
  category: String,
  date: Date,
  isAnswered: Boolean
})

const comment = mongoose.model("comment", {
  name: String,
  email: String,
  content: String,
  date: Date,
  isAdmin: Boolean
})

app.listen(8080, () => {
  console.log("Server running on port 8080")
})
