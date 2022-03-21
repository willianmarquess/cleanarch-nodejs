import FindAllUserController from '../../../modules/users/application/controllers/findall-user.controller.js'
import FindAllUserUseCase from '../../../modules/users/application/useCases/findAllUser/findall-user.usecase.js'
import { UsersInMemoryDB } from '../../../modules/users/infra/repositories/user-in-memory.db.js'
import UserRepositoryInMemory from '../../../modules/users/infra/repositories/user-in-memory.repository.js'


export default function findAllUserControllerFactory () {
    const userRepository = new UserRepositoryInMemory(UsersInMemoryDB)
    const findAllUser = new FindAllUserUseCase(userRepository)
    return new FindAllUserController(findAllUser)
}