import FindAllUserController from '../../../application/controller/users/findall-user.controller.js'
import FindAllUserUseCase from '../../../application/useCase/users/findAllUser/findall-user.usecase.js'
import { UsersInMemoryDB } from '../../../infra/repository/users/user-in-memory.db.js'
import UserRepositoryInMemory from '../../../infra/repository/users/user-in-memory.repository.js'

export default function findAllUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const findAllUser = new FindAllUserUseCase(userRepository)
    return new FindAllUserController(findAllUser)
}