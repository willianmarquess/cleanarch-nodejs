import CreateUserController from '../../../application/controller/users/create-user.controller'
import CreateUserUseCase from '../../../application/useCase/users/createUser/create-user.usecase'
import { UsersInMemoryDB } from '../../../infra/repository/users/user-in-memory.db'
import UserRepositoryInMemory from '../../../infra/repository/users/user-in-memory.repository'

export default function createUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const createUser = new CreateUserUseCase(userRepository)
    return new CreateUserController(createUser)
}