import express from 'express';
import _ from 'lodash';
import { getPost, createPost, deletePost, getPosts, updatePost } from '../controllers/postController.js';
const router = express.Router();


// Get all posts
router.get('/', getPosts)


// Get posts by id
router.get('/:id', )

// Create new post
router.post('/',);

// Update Post
router.put('/:id', )

// Delete Post
router.delete('/:id', ) 

export default router;
