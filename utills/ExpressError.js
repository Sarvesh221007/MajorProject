class ExpressError extends Error{
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode;
    }
}

module.exports=ExpressError;


//chat gpt copy code
// class ExpressError extends Error {
//     constructor(statusCode = 500, message = "Something went wrong") {
//         super(message);
//         this.statusCode = statusCode;
//         Error.captureStackTrace(this, this.constructor);
//     }
// }

// module.exports = ExpressError;
