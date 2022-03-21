import InvalidParamsError from '../../../main/shared/errors/invalid-params.error.js'
import Http from '../../../main/shared/http/http.js'
import CreateUserDTO from '../../useCase/users/createUser/dto/create-user.dto.js'




export default class CreateUserController {
    constructor (createUserUseCase) {
        this.createUserUseCase = createUserUseCase
    }

    async handle (request) {
        try {
            const { email, password } = request.body
            const createUserDTO = new CreateUserDTO(email, password)
            if(!createUserDTO.isValid()) throw new InvalidParamsError(createUserDTO.getErrors())
            const user = await this.createUserUseCase.execute(createUserDTO)
            return Http.created(user)
        } catch (error) {
            return Http.error(error)
        }
    }
}