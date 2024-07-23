import { Response } from "express";
import { CustomRequest } from "../../utility/interface";
import { createFurnitureDB, getFurnitureByIDDB, getFurnitureCount, getFurnitureDB, updateFurnitureDB } from "./furnitures.models";
import { BAD_REQUEST, CREATED, NO_CONTENT, NOT_FOUND, SUCCESSFUL } from "../../utility/httpcode";
import { Types } from "mongoose";


async function createFurniture(req: CustomRequest, res: Response){
    try {
        const body = req.body
        const token = req.decoded_token
        console.log("Token added ", token)
        const create_furniture_data = {...body, users_id: token!._id}
        const created_furniture_data = await createFurnitureDB(create_furniture_data)
        console.log(created_furniture_data)
        res.status(CREATED).json({status: 'success', message: 'Furniture created successfully', result: created_furniture_data})
    } catch (error:any) {
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function editFurniture(req: CustomRequest, res: Response){
    try {
        const body = req.body
        const query = req.query
        const token = req.decoded_token
        if(Object.keys(body).length === 0) return res.status(BAD_REQUEST).json({status: 'error', message: 'No Changes to Save'})
        if(Object.keys(query).length !== 0 && !!query.id){
            const furniture_data = JSON.parse(JSON.stringify(await getFurnitureByIDDB(query.id as string)))
            if(!!furniture_data){
                const update_furniture_data = {$set: {...furniture_data, ...body}}
                const updated_furniture_data = await updateFurnitureDB({_id: new Types.ObjectId(query.id as string)}, update_furniture_data, {new: true})
                console.log("Updated Furniture data ", updated_furniture_data)
                res.status(SUCCESSFUL).json({status: 'success', message: 'Updated furniture successfully', result: updated_furniture_data})
            }else{
                return res.status(NOT_FOUND).json({status: 'error', message: 'Furniture for request ID not found'})
            }
        }else{
            res.status(BAD_REQUEST).json({status: 'error', message: 'Furniture ID not found in request query'})
        }
    } catch (error:any) {
        return res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function getFurniture(req: CustomRequest, res: Response){
    try {
        const body = req.body
        const limit = body.limit || 50
        const skip = body.skip || 0
        const filters = body.filters
        const sort = body.sort
        const query: Record<string, number | string | Record<string, number | string>> = {}
        const sortObj: {[key:string]: 1 | -1} = {}
        if(!!filters && Object.keys(filters).length !== 0){
            for(let filter in filters){
                if(filter === "price"){
                    if(Object.keys(filters[filter]).length !== 0){
                        const price_query: {[key:string]: number} = {}
                        if(filters[filter]["start_price"] != undefined){
                            price_query["$gte"] = filters[filter]["start_price"]
                        }
                        if(filters[filter]["end_price"] != undefined){
                            price_query["$lte"] = filters[filter]["end_price"]
                        }
                        query[filter] = price_query
                    }else{
                        return res.status(BAD_REQUEST).json({status: 'error', message: "Price filter is incorrect"})
                        break;
                    }
                }else if(filter === "rating"){
                    if(Object.keys(filters[filter]).length !== 0){
                        const price_query: {[key:string]: number} = {}
                        if(filters[filter]["start_rating"] != undefined){
                            price_query["$gte"] = filters[filter]["start_rating"]
                        }
                        if(filters[filter]["end_rating"] != undefined){
                            price_query["$lte"] = filters[filter]["end_rating"]
                        }
                        query[filter] = price_query
                    }else{
                        return res.status(BAD_REQUEST).json({status: 'error', message: "Rating filter is incorrect"})
                        break;
                    }
                }else if(filter === "type"){
                    query[filter] = {$in: filters[filter]}
                }else{
                    query[filter] = filters[filter]
                }
            }
        }

        if(!!sort && Object.keys(sort).length !== 0){
            for(let srt in sort){
                sortObj[srt] = sort[srt]
            }
        }
        console.log("Query ", query)
        console.log("Sort Obj ", sortObj)
        const furniture_data = await getFurnitureDB(query, sortObj, limit, skip)
        console.log("Furniture Data ", furniture_data)
        const furniture_count = await getFurnitureCount(query)
        if(furniture_data.length !== 0){
            return res.status(SUCCESSFUL).json({status: 'success', message: 'Successfully fetched furniture data', result: {data: furniture_data, count: furniture_count}})
        }else{
            return res.status(NOT_FOUND).json({status: 'error', message: 'No Furniture data found'})
        }


    } catch (error: any) {
        return res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function getFurnitureByID(req: CustomRequest, res: Response){
    try {
        const params = req.params
        if(!params || Object.keys(params).length === 0 ) return res.status(BAD_REQUEST).json({status: 'error', message: 'Furniture ID required'})
        const furniture_data = await getFurnitureByIDDB(params.id)
        if(!furniture_data){
            return res.status(NOT_FOUND).json({status: 'error', message: 'Request ID furniture not found'})
        }else{
            return res.status(SUCCESSFUL).json({status: 'success', message: 'Successfully fetched furniture data', result: furniture_data})
        }
    } catch (error: any) {
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

export {
    createFurniture,
    editFurniture,
    getFurniture,
    getFurnitureByID
}