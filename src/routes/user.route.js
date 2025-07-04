import { Router } from "express";
import { validateCreateUser } from "../middlewares/validateCreateUser.js";
import { validatePatchUser } from "../middlewares/validatePatchUser.js";
import { UserController } from "../controllers/user.controller.js";
import checkAuth from "../middlewares/checkAuth.js";
import asyncHandler from "../middlewares/asyncHandle.js";
import { UserService } from "../services/user.service.js";
const router = Router();

router.get("/users", asyncHandler(UserController.getAllUsers));
router.get("/users/hello", (req, res) => {
  res.send("Hello World");
});
// router.get("/users/bye", (req, res) => {
//   res.send("Goodbye");
// });

router.get("/users/hi", (req, res) => {
  res.send("Hi");
});

router.get("/users/me", checkAuth, asyncHandler(UserController.getUserInfo)); // nằm trên /users/:id vì nó động nên vô tình nó trùng với /me nên /me không chạy

router.get("/users/:id", asyncHandler(UserController.getUserById));

router.post(
  "/users",
  asyncHandler(validateCreateUser, UserController.postUser)
);



router.put("/users/:id", asyncHandler(UserController.putUser));

router.patch("/users/:id", validatePatchUser, asyncHandler(UserController.patchUser));

router.delete("/users/:id", asyncHandler(UserController.deleteUser));



export default router;




