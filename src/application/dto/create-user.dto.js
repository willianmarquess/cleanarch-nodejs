import Validable from '../../main/shared/validation/validable.js'

export default class CreateUserDTO extends Validable{
    constructor (email, password) {
        this.email = email
        this.password = password
        this.validate()
    }

    validate () {
        this.isEmail(this.email, 'email', 'e-mail inválid')
        this.isMinLength(this.password, 10, 'password', 'the password must be at least 10 characters long')
    }
}