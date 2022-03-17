export default class FindAllUserUseCase {

    constructor (userRepository) {
        this.userRepository = userRepository
    }

    async execute () {
        const users = await this.userRepository.findAll()
        return users
    }
}