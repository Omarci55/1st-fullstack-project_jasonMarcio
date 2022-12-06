import { check, validationResult } from"express-validator"

export let usersValidation = [

        check("fName")
        .escape()
        .trim()
        .isLength({max:20})
        .withMessage("max characters are 20"),
        
        check("lName")
        .escape()
        .trim()
        .isLength({max:20})
        .withMessage("max characters are 20"),

        check("email")
        .isEmail()
        .normalizeEmail() 
        .withMessage("Please, provide us a valid email"),

        check("password")
        .exists()
        .isLength({min:3, max:20})
        .withMessage("Password too short or too long"),

        (req, res, next) => {

            const result = validationResult(req)
            console.log(result)
            if(result.isEmpty()) {
                next()

            } else {

                const error = result.errors.reduce((acc, currentItem) => {
                    acc[ currentItem.param ] = currentItem.msg
                    return acc
                }, {})

                next( {message:error})
            }
        }
]