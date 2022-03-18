import CreateUserController from '../../../modules/user/application/controller/create-user.controller.js'
import CreateUserUseCase from '../../../modules/user/application/useCases/createUser/create-user.usecase.js'
import { UsersInMemoryDB } from '../../../modules/user/infra/repository/user-inmemory.db.js'
import UserRepositoryInMemory from '../../../modules/user/infra/repository/user.repository.js'


export default function createUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const createUser = new CreateUserUseCase(userRepository)
    return new CreateUserController(createUser)
}