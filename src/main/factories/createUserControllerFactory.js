import CreateUserController from '../../modules/user/createUser/CreateUserController.js';
import CreateUser from '../../application/useCases/users/create/CreateUser.js';
import { inMemoryDB } from '../../infra/database/shared/inMemoryDB.js';
import UserRepository from '../../modules/user/infra/repository/inMemory/user.repository.js';

export default function createUserControllerFactory () {
    const userRepository = new UserRepository(inMemoryDB)
    const createUser = new CreateUser(userRepository)
    return new CreateUserController(createUser)
}