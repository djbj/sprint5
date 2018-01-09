import mongoose from "mongoose"
import express from "express"

const app = express()

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
