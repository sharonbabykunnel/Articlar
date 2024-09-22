import User from './../auth/auth.model.js'
import Article from './../article/article.model.js'

export async function findArticle(id) {
    return await Article.find({ userId: id });
}