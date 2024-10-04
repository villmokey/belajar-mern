import { prismaClient } from "../../../prisma/index.js"

// Get list posts
const index = async (req, res, next) => {
  // select * from posts
  const posts = await prismaClient.post.findMany();
  return posts;
}

export {
  index
}
