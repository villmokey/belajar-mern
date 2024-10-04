import * as Yup from 'yup'

let createPostSchema = Yup.object({
  title: Yup.string().required('Title is required').max(200),
  body: Yup.string().required('Body is required'),
  author: Yup.string().required('Author is required!')
});

export {
  createPostSchema
}

