import FindAllUserController from '../../../modules/user/application/controller/findall-user.controller'
import FindAllUserUseCase from '../../../modules/user/application/useCases/findAllUser/findall-user.usecase'
import { UsersInMemoryDB } from '../../../modules/user/infra/repository/user-inmemory.db'
import UserRepositoryInMemory from '../../../modules/user/infra/repository/user.repository'

export default function findAllUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const findAllUser = new FindAllUserUseCase(userRepository)
    return new FindAllUserController(findAllUser)
}