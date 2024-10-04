import { index } from '../services/postService.js'

const getAllPosts = async (req, res, next) => {
  try {
    const result = await index();
    res.json({
      success: true,
      code: 200,
      message: "Success to get data",
      data: result
    })
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export {
  getAllPosts
}