const notFound = (req,res,next) =>{
    const error = new Error('Endpoint Does Not Exist')
    error.status = 404;
    next(error);
}

export default notFound