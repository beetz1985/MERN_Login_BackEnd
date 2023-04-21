

function asyncWrapper(func) {
    return async (req, res) =>{
        try {
             await func(req, res)
        }catch(err) {
            console.log(err)
        }
    }
}

module.exports = asyncWrapper