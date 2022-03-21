import CreateUserDTO from '../../../application/useCases/users/create/CreateUserDTO.js'


export default class CreateUserController {
    constructor (createUserUseCase) {
        this.createUserUseCase = createUserUseCase
    }

    async handle (request) {
        try {
            const { email, password } = request.body
            const createUserDTO = new CreateUserDTO(email, password)
            const user = await this.createUserUseCase.execute(createUserDTO)
            return {
                body: user,
                statusCode: 200
            }
        } catch (error) {
            return {
                body: { error: error.message },
                statusCode: 400
            } 
        }
    }
}