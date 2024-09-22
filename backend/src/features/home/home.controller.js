import asyncHadler from 'express-async-handler'
import CustomError from '../../helpers/customError.js'
import handleError from '../../middlewares/errorHadler.js'
import * as homeSer from './home.service.js'

export const getArticle = asyncHadler(async (req, res) => {
    try {
        const { id } = req.params;
        const response = await homeSer.getArticle(id);
        res.status(200).json({success:true, data:response})
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res, 500, "An unexpected error occured. Plrea try again later.")
    }
})