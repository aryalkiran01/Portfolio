import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import projectRoutes from './routes/projectroutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/projects', projectRoutes)

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Connect DB and Start Server
connectDB()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})
