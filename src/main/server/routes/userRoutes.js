import { Router } from 'express';
import { expressAdapter } from '../../adapter/ExpressAdapter.js';
import createUserControllerFactory from '../../factories/createUserControllerFactory.js';

const userRouter = Router();

userRouter.get('/user', expressAdapter(createUserControllerFactory()))

export default userRouter