import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'

const port = process.env.PORT  || 3000;
const app = express();


// Body parser middleware
app.use(express.json()) // takes care of being able to submit raw json
app.use(express.urlencoded({ extended: false})) // takes cares of sending form data

//Logger middleware
app.use(logger)


// Routes
app.use('/api/posts', posts)

// Error Handler 
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`))



// setup static folder - where you can create a static file and a route is automatically created with the file name 
// app.use(express.static(path.join(__dirname, 'public'))) //app.use is for setting up middleware


// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
    
// })
// app.get('/about', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    
// })

