import { Request, RequestHandler, Response } from "express";
import { BAD_REQUEST, CREATED, NOT_FOUND, SUCCESSFUL, UNAUTHORIZED } from "../../utility/httpcode";
import { hash, compare } from 'bcryptjs'
import { SALT_ROUNDS } from "../../utility/constants";
import { createUserDB, getUser, getUserByIdDB, updateUserDB } from "./users.models";
import { createAccessToken } from "../../utility/helper";
import { CustomRequest } from "../../utility/interface";
import { JwtPayload } from "jsonwebtoken";

async function createUser(req:Request, res:Response){
    try {
        const body = req.body
        const user_data = {
            email: body.email,
            password: body.password,
            username: body.username,
            name: body.name,
            role: body.role,
            mobile_no: body.mobile_no,
            country_code: body.country_code
        }
        const hash_password = await hash(user_data.password, SALT_ROUNDS)
        user_data.password = hash_password
        const created_user = JSON.parse(JSON.stringify(await createUserDB(user_data)))

        res.status(CREATED).json({status: 'success', message: 'User registered successfully', result: {email: created_user.email, username: created_user.username, name: created_user.name}})
    } catch (error: any) {
        console.log("Error while creating user ", error)
        console.log(error)
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function loginUser(req:Request, res:Response){
    try {
        const body = req.body
        const email = body.email
        const password = body.password
        const get_user = JSON.parse(JSON.stringify(await getUser(body)))
        if(!!get_user){
            const isPasswordValid = await compare(password, get_user.password)
            if(isPasswordValid){
                const token = createAccessToken({email: get_user.email, _id: get_user._id, role: get_user.role})
                res.header('token', token)
                res.status(SUCCESSFUL).json({status: 'success', message: 'User login successfully', result: get_user})
            }else{
                return res.status(UNAUTHORIZED).json({status: 'error', message: 'Password is incorrect'})
            }
        }else{
            return res.status(NOT_FOUND).json({status: 'error', message: `User with email ${email} not found`})
        }
    } catch (error:any) {
        console.log("Error while login ", error)
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function updateUser(req: CustomRequest, res: Response){
    try {
        const body = req.body
        const token = req.decoded_token as JwtPayload
        if(Object.keys(body).length === 0) return res.status(BAD_REQUEST).json({status: 'error', message: 'No changes to save'})
        const get_user = JSON.parse(JSON.stringify(await getUser({email: token.email})))
        if(!!get_user){
            const update_user_data = {$set: {...get_user, ...body}}
            const updated_user_data = JSON.parse(JSON.stringify(await updateUserDB({email: token.email}, update_user_data, {new: true})))
            delete updated_user_data!.password
            res.status(SUCCESSFUL).json({status: 'success', result: updated_user_data})
        }else{
            return res.status(NOT_FOUND).json({status: 'error', message: 'User not found'})
        }
    } catch (error: any) {
        res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

async function getUserById(req: CustomRequest, res: Response){
    try {
        const token = req.decoded_token
        const user_data = await getUserByIdDB(token!._id)
        if(!!user_data){
            return res.status(SUCCESSFUL).json({status: 'success', message: 'User fetched successfully', result: user_data})
        }else{
            return res.status(NOT_FOUND).json({status: 'error', message: `User of requested ID ${token!._id} not found`})
        }
    } catch (error: any) {
        return res.status(BAD_REQUEST).json({status: 'error', message: error.message})
    }
}

export {
    createUser,
    loginUser,
    updateUser,
    getUserById
}