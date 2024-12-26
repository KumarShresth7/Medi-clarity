import express from 'express';
import  authMiddleware  from '../middlewares/authMiddleware.js';
import { LoginUser,RegisterUser } from '../controller/authController.js';
const router = express.Router();

router.post('/login',authMiddleware,LoginUser);
router.post('/register',authMiddleware,RegisterUser);
export default router;