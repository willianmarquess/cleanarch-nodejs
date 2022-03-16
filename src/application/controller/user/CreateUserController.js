import CreateUserDTO from '../../useCases/users/create/CreateUserDTO.js'


export default class CreateUserController {
    constructor (createUser) {
        this.createUser = createUser
    }

    async execute (request) {
        try {
            const { email, password } = request.body
            const createUserDTO = new CreateUserDTO(email, password)
            const user = await this.createUser.execute(createUserDTO)
            return {
                body: user,
                statusCode: 200
            }
        } catch (error) {
            return {
                body: { error: error.message },
                statusCode: 200
            } 
        }
    }
}