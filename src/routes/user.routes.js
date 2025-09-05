import {Router} from 'express';
import { registerUser } from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { loginUser, logoutUser, refreshAccessToken } from '../controllers/user.controller.js';

const router = Router();


// router.post("/register", registerUser);
router.route("/register").post(
    upload.fields([
        {
            name: "avatar", maxCount: 1
        },
        {
            name:"cover", maxCount: 1
        }
    ]),
    registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

r
    
export default router;