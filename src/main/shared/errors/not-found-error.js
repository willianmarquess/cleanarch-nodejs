import CustomError from './custom.error.js';

export default class NotFoundError extends CustomError {
    constructor (message) {
        super(message || 'Resource not found', 404)
    }
}