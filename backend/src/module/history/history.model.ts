import { Types } from "mongoose";
import history from "../../models/history";
import { ICreateHistory } from "./history.interface";

const createHistoryDB = async(create_data: ICreateHistory) => {
    try {
        return await history.create(create_data)
    } catch (error) {
        throw error
    }
}

const removeHistoryFromDB = async(id:string) => {
    try {
        return await history.deleteOne({_id: new Types.ObjectId(id)})
    } catch (error) {
        throw error
    }
}

const getHistoryDB = async(query: Record<string, number | string>, limit: number, skip: number) => {
    try {
        return history.find(query).populate('furnitures_id').populate("users_id").skip(skip).limit(limit)
    } catch (error) {
        throw error
    }
}

const getHistoryCount = async(query: Record<string, number | string>) => {
    try {
        return history.countDocuments(query)
    } catch (error) {
        throw error
    }
}

export {
    createHistoryDB,
    removeHistoryFromDB,
    getHistoryDB,
    getHistoryCount
}