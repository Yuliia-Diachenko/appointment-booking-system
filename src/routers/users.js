import { Router } from "express";
import { getUsersController,
        getUserByIdController,
        createUserController,
        deleteUserController,
        upsertUserController,
        patchUserController
} from "../controllers/users.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { createUserSchema } from "../validation/users.js";

const router = Router();

router.get('/', ctrlWrapper(getUsersController));

router.get('/:userId', isValidId, ctrlWrapper(getUserByIdController));

router.post('/', validateBody(createUserSchema), ctrlWrapper(createUserController));

router.delete('/:userId', isValidId, ctrlWrapper(deleteUserController));

router.put('/:userId', isValidId, ctrlWrapper(upsertUserController));

router.patch('/:userId', isValidId, ctrlWrapper(patchUserController));

export default router;
