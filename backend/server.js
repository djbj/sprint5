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

app.listen(8080, () => {
  console.log("Server running on port 8080")
})
