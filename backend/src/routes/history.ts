import { Router } from "express";
import { checkToken } from "../middleware/authentication";
import inputValidation from "../middleware/validation";
import { createHistoryValidation, getHistoryValidation, removeHistoryValidation } from "../module/history/history.validation";
import { createHistory, getHistory, removeHistory } from "../module/history/history.controller";
import checkAccess from "../middleware/authorization";

const historyRouter = Router()

historyRouter.post('/create', [checkToken(), inputValidation(createHistoryValidation)], createHistory)
historyRouter.delete('/remove', [checkToken(), checkAccess(), inputValidation(removeHistoryValidation)], removeHistory)
historyRouter.post('/', [checkToken(), inputValidation(getHistoryValidation)], getHistory)

export default historyRouter