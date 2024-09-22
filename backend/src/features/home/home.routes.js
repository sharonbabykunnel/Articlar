import express from "express"
import * as homeCont from './home.controller.js'

const router = express.Router();

router.get('/getArticle/:id', homeCont.getArticle);

export default router;