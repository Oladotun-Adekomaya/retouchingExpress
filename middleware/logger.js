import colors from 'colors';

const logger = (req,res,next) =>{
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red',
    }

    let colorString = methodColors[req.method] || 'white'

    console.log(colorString);
    
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    // console.log(colors.colorString(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`))
    next();
};

export default logger;