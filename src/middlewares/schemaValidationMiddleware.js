import genericErrors from "../errors/genericErros.js"
// import {Request, Response, NextFunction} from "express"
 //import {messageError} from "../protocols/movies.js"

function validationSchema(schema){
    
    return (req, res, next) => {
        const error = schema.validate(req.body, {abortEarly:false})

        if (error) {
            const errorsMsg = error.details.map((detail) => detail.message)
            //console.log('errorsMsg',errorsMsg)
            throw genericErrors.conflitctError(errorsMsg)
        }

        next()


    }
}

export default validationSchema