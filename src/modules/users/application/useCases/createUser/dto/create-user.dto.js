import Validable from '../../../../../shared/helpers/validation/validable.js'

export default class CreateUserDTO extends Validable {
    constructor (email, password) {
        super()
        this.email = email
        this.password = password
        this.validate()
    }

    validate () {
        this.isEmail(this.email, 'email', 'e-mail is invalid')
        this.isMinLength(this.password, 10, 'password', 'the password must be at least 10 characters long')
    }
}