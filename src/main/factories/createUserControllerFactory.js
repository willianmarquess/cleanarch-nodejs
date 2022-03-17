import CreateUserController from '../../application/controller/user/CreateUserController.js';
import CreateUser from '../../application/useCases/users/create/CreateUser.js';
import { inMemoryDB } from '../../infra/database/shared/inMemoryDB.js';
import UserRepository from '../../infra/database/users/UserRepository.js';

export default function createUserControllerFactory () {
    const userRepository = new UserRepository(inMemoryDB)
    const createUser = new CreateUser(userRepository)
    return new CreateUserController(createUser)
}