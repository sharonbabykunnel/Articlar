import User from './../auth/auth.model.js'
import Article from './../article/article.model.js'

export async function findArticle(id) {
    return await Article.find({ userId: id });
}

export async function findUser(id) {
    return await User.findById(id);
}

export async function getArticles(preferences, id) {
    return await Article.aggregate([
      {
        $match: {
          category: { $in: preferences },
          notInterest: { $nin: [id] },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
}

export async function getMyArticles(id) {
    return await Article.find({ userId: id }).revers();
}

export async function postArticle(text, files, userId, category) {
  return await Article.create({ text, files, userId, category });
}

export async function likeArticle(userId, id) {
    return await Article.findByIdAndUpdate(
      id,
      [
        {
          $set: {
            likes: {
              $cond: {
                if: { $in: [userId, "$likes"] },
                then: { $setDifference: ["$likes", [userId]] },
                else: { $concatArrays: ["$likes", [userId]] },
              },
            },
          },
        },
      ],
      {
        new: true,
      }
    );
}

export async function removeArticle(user, id) {
    return await Article.updateOne(
        {
            _id: id,
          userId:{$ne:user}
       },
      { $addToSet: { notInterest: user } }
    );
  }