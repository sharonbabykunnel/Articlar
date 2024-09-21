import User from './auth.model.js'

export async function findByEmail(email) {
    return await User.findOne({ email });
}

export async function createUser(values) {
    return await User.create(values);
}