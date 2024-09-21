import express from 'express'
import * as auth from './auth.controller.js'

const router = express.Router()

router.post('/signup', auth.signup);

export default router;