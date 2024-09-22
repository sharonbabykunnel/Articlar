import CustomError from "../../helpers/customError.js";

export async function getArticle(id) {
  if (!id) throw new CustomError("No post found", 404);
  const response = await homeRepo.findArticle(id);
  if (!response) throw new CustomError("No post found", 404);
  return response;
}