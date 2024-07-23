import { Types } from "mongoose";
import furnitures from "../../models/furnitures";
import { IFurnitureCreate } from "./furniture.interface";
import users from "../../models/users";

const createFurnitureDB = async (furniture_data:IFurnitureCreate) => {
    try {
        return await furnitures.create(furniture_data)
    } catch (error) {
        throw error
    }
}

const getFurnitureByIDDB = async (furniture_id: string) => {
    try {
        return await furnitures.findById(furniture_id)
    } catch (error) {
        throw error
    }
}

const getFurnitureDB = async (query:Record<string, number | string | Record<string, number | string>>, sort: {[key: string]: 1 | -1}, limit: number, skip: number) => {
    try {
        return await furnitures.find(query).sort(sort).skip(skip).limit(limit)
    } catch (error) {
        throw error
    }
}

const updateFurnitureDB = async(query: {_id: Types.ObjectId}, update_data: {[key:string]: string | number | Array<string>}, options: {new?: boolean} = {}) => {
    try {
        return await furnitures.findOneAndUpdate(query, update_data, options)
    } catch (error) {
        throw error
    }
}

const getFurnitureCount = async(query:Record<string, number | string | Record<string, number | string>>) => {
    try {
        return users.countDocuments(query)
    } catch (error) {
        throw error
    }
}

export {
    createFurnitureDB,
    getFurnitureByIDDB,
    updateFurnitureDB,
    getFurnitureDB,
    getFurnitureCount
}