import { Router } from "express";
import { getUsersController,
        getUserByIdController,
        createUserController,
        deleteUserController,
        upsertUserController,
        patchUserController
} from "../controllers/users.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/users', ctrlWrapper(getUsersController));

router.get('/users/:userId', ctrlWrapper(getUserByIdController));

router.post('/users', ctrlWrapper(createUserController));

router.delete('/users/:userId', ctrlWrapper(deleteUserController));

router.put('/users/:userId', ctrlWrapper(upsertUserController));

router.patch('/users/:userId', ctrlWrapper(patchUserController));

export default router;
