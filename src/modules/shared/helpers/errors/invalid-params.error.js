import CustomError from './custom.error.js'

export default class InvalidParamsError extends CustomError {
    constructor (errors) {
        super('invalid params', 400)
        this.errors = errors
    }
}