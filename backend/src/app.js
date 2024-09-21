import express from 'express'
import cors from 'cors'
import authRoutes from './features/auth/auth.routes.js'
import  './config/db.js'

const app = express();

app.use(cors());
app.use(`/api/auth`, authRoutes);

export default app;