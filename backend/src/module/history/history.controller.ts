import { Response } from "express";
import { BAD_REQUEST, CREATED, NOT_ALLOWED, NOT_FOUND, SUCCESSFUL } from "../../utility/httpcode";
import { CustomRequest } from "../../utility/interface";
import { createHistoryDB, getHistoryCount, getHistoryDB, removeHistoryFromDB } from "./history.model";
import { REMOVE_HISTORY_TYPE } from "../../utility/constants";

async function createHistory(req: CustomRequest, res: Response){
    try {
        const query = req.query
        const token = req.decoded_token
        if(!query && Object.keys(query).length === 0) return res.status(BAD_REQUEST).json({status: 'error', message: 'Invalid request'})
        if(!token || !token._id) return res.status(BAD_REQUEST).json({status: 'error', message: 'User ID not found'})
        const create_data = {
            users_id: token._id as string,
            furnitures_id: query.furniture_id as string,
            type: parseInt(query.type as string)
        }
        console.log("Create data ", create_data)
        const created_data = await createHistoryDB(create_data)
        res.status(CREATED).json({status: 'success', message: 'Successfully created history', result: created_data})
    } catch (error:any) {
        return res.status(BAD_REQUEST).json({status: 'error', message: error.message,})
    }
}

async function removeHistory(req: CustomRequest, res: Response){
    try {
        const query = req.query
        if(!query || Object.keys(query).length === 0) return res.status(BAD_REQUEST).json({status: 'error', message: 'Invalid request'})
        const type = parseInt(query.type as string)
        if(REMOVE_HISTORY_TYPE.includes(type)){
            const delete_history = await removeHistoryFromDB(query.id as string)
            if(delete_history.deletedCount > 0){
                res.status(SUCCESSFUL).json({status: 'success', message: 'Deleted successfully'})
            }else{
                res.status(NOT_FOUND).json({status: 'error', message: 'Not data found'})
            }
        }else{
            return res.status(NOT_ALLOWED).json({status: 'error', message: 'User does not have sufficient access'})
        }
    } catch (error: any) {
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function getHistory(req: CustomRequest, res: Response){
    try {
        const body = req.body
        if(!body && Object.keys(body).length) return res.status(BAD_REQUEST).json({status: 'error', message: 'Invalid Request'})
        const type = body.type
        const users_id = body.users_id
        const furnitures_id = body.furniture_id
        const limit = body.limit || 50
        const skip = body.skip || 0
        const query: {[key:string]: string | number} = {}

        if(type != undefined) query["type"] = type
        if(users_id != undefined) query["users_id"] = users_id
        if(furnitures_id != undefined) query["furnitures_id"] = furnitures_id

        const get_history_data = await getHistoryDB(query, limit, skip)
        const get_history_count = await getHistoryCount(query)
        if(get_history_count !== 0){
            res.status(SUCCESSFUL).json({status: 'success', message: 'Data fetched successfully', result: {data: get_history_data, count: get_history_count}})
        }else{
            res.status(NOT_FOUND).json({status: 'error', message: 'No Data found'})
        }
    } catch (error: any) {
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

export {
    createHistory,
    removeHistory,
    getHistory
}