import FindAllUserController from '../../../application/controller/users/findall-user.controller'
import FindAllUserUseCase from '../../../application/useCase/users/findAllUser/findall-user.usecase'
import { UsersInMemoryDB } from '../../../infra/repository/users/user-in-memory.db'
import UserRepositoryInMemory from '../../../infra/repository/users/user-in-memory.repository'

export default function findAllUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const findAllUser = new FindAllUserUseCase(userRepository)
    return new FindAllUserController(findAllUser)
}