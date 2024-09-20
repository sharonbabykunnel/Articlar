import express from 'express'
import cors from 'cors'
import  './config/db.js'

const app = express();

app.use(cors());

export default app;