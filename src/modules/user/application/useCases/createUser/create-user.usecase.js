import User from '../../../domain/users/user.js'

export default class CreateUserUseCase {

    constructor (userRepository) {
        this.userRepository = userRepository
    }

    async execute (createUserDTO) {
        const userAlreadyExists = await this.userRepository.findbyEmail(createUserDTO.email)
        if (userAlreadyExists) throw new Error('User already exists')
        const user = await this.userRepository.save(new User(null, createUserDTO.email, createUserDTO.password))
        return user
    }
}