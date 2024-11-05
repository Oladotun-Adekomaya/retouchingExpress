const express = require('express');
const router = express.Router;

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
]

// Get all posts
router.get('/api/posts/', (req,res) =>{
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0,limit))
    }
    
    res.status(200).json(posts); 
    
    
})


// Get posts by id
router.get('/api/posts/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
      return post.id === id
    })

    if (post) {
        return res.status(200).json(post)
    }
    
    res.status(404).send("Not Found")
    
    
    
})

export default router;