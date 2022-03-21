import CustomError from '../../../../../main/shared/errors/custom.error.js';

export default class UserAlreadyExistsError extends CustomError {
    constructor () {
        super('user already exists', 409)
    }
}