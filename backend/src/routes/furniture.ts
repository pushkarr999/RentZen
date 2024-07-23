import { Router } from "express";
import inputValidation from "../middleware/validation";
import { createFurnitureValidation, getFurnitureByIdValidation, getFurnitureValidation, updateFurnitureValidation } from "../module/furnitures/furnitures.validation";
import { checkToken } from "../middleware/authentication";
import { createFurniture, editFurniture, getFurniture, getFurnitureByID } from "../module/furnitures/furnitures.controller";
import checkAccess from "../middleware/authorization";

const furnitureRoute = Router()

furnitureRoute.post('/create', [checkToken(), checkAccess(), inputValidation(createFurnitureValidation)], createFurniture)
furnitureRoute.put('/update', [checkToken(), checkAccess(), inputValidation(updateFurnitureValidation)], editFurniture)
furnitureRoute.post('/', [checkToken(), inputValidation(getFurnitureValidation)], getFurniture)
furnitureRoute.get('/detail/:id', [checkToken(), inputValidation(getFurnitureByIdValidation)], getFurnitureByID)
export default furnitureRoute