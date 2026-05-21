import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())

app.use(express.json())
app.use(todoRoutes)

const uri: string = "mongodb+srv://your_db_user:your_db_password@todo-cluster.50evxot.mongodb.net/?appName=todo-cluster";


mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })