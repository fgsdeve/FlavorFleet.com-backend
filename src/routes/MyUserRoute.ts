import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();
/* api/my/user */
router.get("/",
  jwtParse,
  jwtCheck,
  MyUserController.getCurrentUser)
router.post("/",
  jwtCheck,
  MyUserController.createCurrentUser);

router.put(
  "/",
  jwtParse,
  jwtCheck,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
