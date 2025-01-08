import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import conectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/user.routes.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
conectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(port, () => console.log(`Server started on PORT: `+port))