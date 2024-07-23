import { Router } from "express";
import usersRoute from "./routes/users";
import furnitureRoute from "./routes/furniture";
import historyRouter from "./routes/history";

const appRouter = Router()

appRouter.use('/users', usersRoute)
appRouter.use('/furniture', furnitureRoute)
appRouter.use('/history', historyRouter)

export default appRouter