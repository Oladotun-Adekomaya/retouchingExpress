import _ from 'lodash';


let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
]


// @desc    Get all posts
// @route   GET /api/posts
export const getPosts = (req,res,next) =>{
    const limit = parseInt(req.query.limit)
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0,limit))
    }
    
    res.status(200).json(posts); 
    
    
}


// @desc    Create a new post
// @route   GET /api/posts/:id
export const getPost = (req,res,next) =>{
    const id = parseInt(req.params.id)
    const post = posts.find((post) => {
      return post.id === id
    })

    if (post) {
        return res.status(200).json(post)
    }
    
    res.status(404).send("Not Found")
    
    
    
}


// @desc    Create a new post
// @route   POST /api/posts
export const createPost = (req,res,next) =>{
    console.log(req.body);
    const newPost = req.body;
    posts.push(newPost);

    res.status(201).json(posts);
    
}


// @desc    Edit a post
// @route   PUT /api/posts/:id
export const updatePost = (req,res,next) =>{
    let id = parseInt(req.params.id);

    let post = posts.find((post) => {
    return post.id === id
    })

    let index = posts.findIndex((p) => {
        if (_.isEqual(p,post)) {
            return p
        }
    })
    
    
    if (post) {
        let updatedPost = req.body;

        if (updatedPost.title || updatedPost.id) {
            let postTitle = updatedPost.title || post.title
            let postId = parseInt(updatedPost.id) || post.id;
            console.log(postId,postTitle);
            
            updatedPost.title = postTitle;
            updatedPost.id = postId;
        }
        
        posts[index] = updatedPost;

        res.status(201).json(posts);
    }else{
        res.status(404).send("Post Not Found")
    }     

}


// @desc    delete a post
// @route   DELETE /api/posts/:id
export const deletePost = (req,res,next) =>{
    let id = parseInt(req.params.id);
    let post = posts.find((post) => {
    return post.id === id
    })
    console.log(post);
    
    let index = posts.findIndex((p) => {
        if (_.isEqual(p,post)) {
            return p
        }
    })
    
    if (post) {
        posts.splice(index,1)
        console.log(`Item index number ${index} has been deleted`);
        res.status(201).send(posts)
    } else {
        const error = new Error("Post Not Found");
        error.status = 404;
        return next(error);
    }
}