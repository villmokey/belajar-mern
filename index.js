import Express from 'express';
import { getAllPosts } from './src/app/controllers/postController.js';

const app = Express();
const port = 5000;

app.get('/posts', getAllPosts);

app.get('/health-check', (req, res) => {
  res.json('App is succeeded')
})

app.listen(port, () => {
  console.log('APP IS RUNNING ON PORT 5000....')
})

// HTTP METHOD

// create blog
// edit blog
// view blog (list)
// delete blog

