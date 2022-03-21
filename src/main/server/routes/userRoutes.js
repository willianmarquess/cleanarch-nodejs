import { Router } from 'express';
import { expressAdapter } from '../../adapter/ExpressAdapter.js';
import createUserControllerFactory from '../factories/createUserControllerFactory.js';
import findAllUserControllerFactory from '../factories/findallUserControllerFactory.js';

const userRouter = Router();

userRouter.post('/user', expressAdapter(createUserControllerFactory()))
userRouter.get('/user', expressAdapter(findAllUserControllerFactory()))

export default userRouter