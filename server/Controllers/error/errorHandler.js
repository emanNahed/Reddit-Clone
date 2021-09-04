const ApiError = require("./ApiError")

const errorHandler = (err, req, res, next) => {
    if(err instanceof ApiError){
        return res.status(err.status).json(err.msg);
    }

    res.status(500).json('something went wrong');
}

module.exports = errorHandler;