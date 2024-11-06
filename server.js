import express from 'express';
import pat from 'path';
import posts from './routes/posts'
const port = process.env.PORT  || 3000;
const app = express();






// setup static folder - where you can create a static file and a route is automatically created with the file name 
// app.use(express.static(path.join(__dirname, 'public'))) //app.use is for setting up middleware


// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
    
// })
// app.get('/about', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    
// })

// Routes
app.use('/api/posts', posts)


app.listen(port, () => console.log(`Server is running on port ${port}`))