import CustomError from "../../helpers/customError.js";
import * as homeRepo from './home.repository.js'


export async function getArticle(id) {
  if (!id) throw new CustomError("No post found", 404);
    const user = await homeRepo.findUser(id);
    console.log(user,'asdfasd')
  const response = await homeRepo.getArticles(user?.preferences, id);
  console.log(response)
    if (!response) throw new CustomError("No post found", 404);
  return response;
}

export async function getMyArticle(id) {
  if (!id) throw new CustomError("No post found", 404);
  const response = await homeRepo.getMyArticles( id);
  console.log(response)
    if (!response) throw new CustomError("No post found", 404);
  return response;
}

export async function postArticle(text, files, userId, category) {
  if (!text || !files || !userId || !category) 
    throw new CustomError("text, files, category are needed", 404);
  const response = await homeRepo.postArticle(text, files, userId, category);
  if (!response) throw new CustomError("No post found", 404);
  return response;
}

export async function likeArticle(userId, id) {
    console.log(userId,id)
  if ( !userId ) throw new Error 
  const response = await homeRepo.likeArticle( userId, id);
  if (!response) throw new CustomError("No post found", 404);
  return response;
}

export async function removeArticle(userId, id) {
    console.log(userId,id)
  if ( !userId ) throw new Error 
    const response = await homeRepo.removeArticle(userId, id);
    console.log(response,'adfasf')
  if (!response) throw new CustomError("Cannot block your own article", 404);
  return response;
}