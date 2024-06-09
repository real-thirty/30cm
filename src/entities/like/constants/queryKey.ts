const LIKE = '@like'

export const likeQueryKey = {
  like: [LIKE],
  getLikeByUserIdProductId: (userId: string, productId: string) => [LIKE, userId, productId ],
  getUserLikes: (userId: string) => [LIKE, userId]

};