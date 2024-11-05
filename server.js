const express = require('express');
const port = process.env.PORT  || 3000;
const app = express();
const path = require('path')
const post = require('./routes/posts')




// setup static folder - where you can create a static file and a route is automatically created with the file name 
// app.use(express.static(path.join(__dirname, 'public'))) //app.use is for setting up middleware


// app.get('/', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
    
// })
// app.get('/about', (req,res) =>{
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
    
// })




app.listen(port, () => console.log(`Server is running on port ${port}`))