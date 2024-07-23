import users from "../../models/users";
import { ICreateUser, IGetUser } from "./users.interface";


const createUserDB = async (user_data:ICreateUser) => {
    try {
        let created_user = await users.create(user_data)
        // created_user = created_user.save()
        return created_user
    } catch (error) {
        throw error
    }
}

const getUser = async(user_data: IGetUser) => {
    try {
        return await users.findOne({email: user_data.email})
    } catch (error) {
        throw error
    }
}

const updateUserDB = async(query: {email: string}, update_user_data: any, options: {new?: boolean} = {}) => {
    try {
        return await users.findOneAndUpdate(query, update_user_data, options)
    } catch (error) {
        throw error
    }
}

const getUserByIdDB = async(id: string) => {
    try {
        return await users.findById(id)
    } catch (error) {
        throw error
    }
}

export {
    createUserDB,
    getUser,
    updateUserDB,
    getUserByIdDB
}