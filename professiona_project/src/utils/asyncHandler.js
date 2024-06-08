const asyncHandler = (fn, errorMessage = '') => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        console.log(`Error :: ${error} \n additional Information ${errorMessage}`);
        res.status(error.code || 500).json({
            sucess: false,
            message: errorMessage || error.message
        })
    }

};


export {asyncHandler};