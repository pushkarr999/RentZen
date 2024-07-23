import { Router } from "express";
import inputValidation from "../middleware/validation";
import { createUser, getUserById, loginUser, updateUser } from "../module/users/users.controller";
import { createUserValidation, loginUserValidation, updateUserValidation } from "../module/users/users.validation";
import { checkToken } from "../middleware/authentication";

const usersRoute = Router()

usersRoute.post('/register', [inputValidation(createUserValidation)], createUser)
usersRoute.post('/login', [inputValidation(loginUserValidation)], loginUser)
usersRoute.put('/update', [checkToken(), inputValidation(updateUserValidation)], updateUser)
usersRoute.get("/", [checkToken()], getUserById)

export default usersRoute