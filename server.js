const express = require('express');
const port = process.env.PORT  || 3000;
const app = express();
const path = require('path')




// setup static folder - where you can create a static file and a route is automatically created with the file name 
// app.use(express.static(path.join(__dirname, 'public'))) //app.use is for setting up middleware


// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
    
// })
// app.get('/about', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    
// })

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
]

// Get all posts
app.get('/api/posts/', (req,res) =>{
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0,limit))
    } else {
        res.json(posts); 
    }
    
})

// Get a single post
app.get('/api/posts/:id', (req,res) =>{
    const id = parseInt(req.params.id)
    post = posts.find((post) => {
      return post.id === id
    })
    
    res.json(post);
})


app.listen(port, () => console.log(`Server is running on port ${port}`))