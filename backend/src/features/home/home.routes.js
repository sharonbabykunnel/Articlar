import express from "express"
import * as homeCont from './home.controller.js'

const router = express.Router();

router.get('/getArticle/:id', homeCont.getArticle);
router.get('/getMyArticle/:id', homeCont.getMyArticle);
router.post('/postArticle', homeCont.postArticle);
router.post('/likeArticle/:id', homeCont.likeArticle);
router.post('/removeArticle/:id', homeCont.removeArticle);

export default router;