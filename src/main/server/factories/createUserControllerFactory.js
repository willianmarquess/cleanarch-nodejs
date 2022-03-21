import CreateUserController from '../../../application/controller/users/create-user.controller.js'
import CreateUserUseCase from '../../../application/useCase/users/createUser/create-user.usecase.js'
import { UsersInMemoryDB } from '../../../infra/repository/users/user-in-memory.db.js'
import UserRepositoryInMemory from '../../../infra/repository/users/user-in-memory.repository.js'

export default function createUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const createUser = new CreateUserUseCase(userRepository)
    return new CreateUserController(createUser)
}