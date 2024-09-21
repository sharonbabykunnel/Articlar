import asyncHadler from 'express-async-handler'
import * as authS from './auth.service.js'
import handleError from './../../middlewares/errorHadler.js'
import CustomError from '../../helpers/customError.js'

export const signup = asyncHadler(async (req, res) => {
    try {
        const values = req.body;
        const response = await authS.signup(values)
        res.status(201).json({success:true,data:response});
    } catch (error) {
        if (error instanceof CustomError) return handleError(res, error.statusCode, error.message, error.code);
        return handleError(res,500,'An unexpected error occured. Please try again later.')
    }
});
