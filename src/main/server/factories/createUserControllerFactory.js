import CreateUserController from '../../../modules/users/application/controllers/create-user.controller.js'
import CreateUserUseCase from '../../../modules/users/application/useCases/createUser/create-user.usecase.js'
import { UsersInMemoryDB } from '../../../modules/users/infra/repositories/user-in-memory.db.js'
import UserRepositoryInMemory from '../../../modules/users/infra/repositories/user-in-memory.repository.js'

export default function createUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const createUser = new CreateUserUseCase(userRepository)
    return new CreateUserController(createUser)
}