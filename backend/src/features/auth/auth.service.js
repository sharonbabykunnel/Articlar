import CustomError from '../../helpers/customError.js';
import * as authR from './auth.repository.js'

export async function signup(values) {
    if (!values.email || !values.password) throw new CustomError("Email and Password are required", 400, 'VALIDATION_ERROR');
    const existingUser = await authR.findByEmail(values.email);
    if (existingUser) throw new CustomError("User allready exists", 400, 'USER_ALLREADY_EXISTS');
    const response = await authR.createUser(values);
    return response;
}
