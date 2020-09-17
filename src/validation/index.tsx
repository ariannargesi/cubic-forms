import validator from 'validator'

export const isEmail = (value: string) => {
    return validator.isEmail(value)
}
export const isValidPassword = (value: string) => {
    return validator.isLength(value, {
        min: 7,
        max: 32 
    })
}