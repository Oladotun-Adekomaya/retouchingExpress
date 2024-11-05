const express = require('express');
const port = process.env.PORT  || 3000;
const app = express();
const path = require('path')




// setup static folder
app.use(express.static(path.join()))





app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    
})
app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
    
})



app.listen(port, () => console.log(`Server is running on port ${port}`))