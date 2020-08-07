 const notFound = (req,res,next) => {
    const error = new Error(`Not Found -${req.originalUrl} `)
    res.status(404);
    next(error);
}

//eslint disabled no-unusual-vars
 const errorHandler = (error, req, res, next) => { //Error handling middleware
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'An error took place 😡' : error.stack,
    })
}

module.exports = {
    notFound,
    errorHandler
}