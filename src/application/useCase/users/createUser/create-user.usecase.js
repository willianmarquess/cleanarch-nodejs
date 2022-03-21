import User from '../../../../domain/users/user.entity.js'
import UserAlreadyExistsError from './errors/user-already-exists.error.js'


export default class CreateUserUseCase {

    constructor (userRepository) {
        this.userRepository = userRepository 
    }

    async execute (createUserDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(createUserDTO.email)
        if (userAlreadyExists) throw new UserAlreadyExistsError()
        const user = await this.userRepository.save(new User(null, createUserDTO.email, createUserDTO.password))
        return user 
    }
}