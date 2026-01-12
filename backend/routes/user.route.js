import express from 'express';
import { getFeaturedUser,addNewUser,getAllUsers } from '../controllers/user.controller.js'

const router = express.Router();

router.get("/all",getAllUsers)
router.get("/featured",getFeaturedUser);
router.post("/new",addNewUser);

export default router;