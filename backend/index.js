import express from "express"
import dotenv from "dotenv"
import { db } from "./src/db/db.js"
import cookieParser from "cookie-parser"
import authRoutes from "./src/routes/auth.routes.js"
dotenv.config()
const app= express()
const port =process.env.PORT || 5000

app.use(cookieParser())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello World") 
})
app.use('/api/auth',authRoutes)

app.listen(port ,()=>{
   db();
    console.log(`Server is running on port ${port}`)
})
