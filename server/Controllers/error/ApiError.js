class ApiError{
    constructor(status, msg){
        this.status = status;
        this.msg= msg;
    }


    static badRequest(msg){
        return new ApiError(400, msg);
    }


    static internalServer(msg){
        return new ApiError(500,msg);
    }
}


module.exports = ApiError; 