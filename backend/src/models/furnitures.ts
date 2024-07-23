import mongoose, { Schema } from "mongoose";
import { FURNITURE_TYPE, FURNITURE_STATUS } from "../utility/constants";

const furnitures = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number},
    type: {type: Number, enum: [FURNITURE_TYPE.BEDS, FURNITURE_TYPE.CHAIRS, FURNITURE_TYPE.DINNING_TABLE, FURNITURE_TYPE.SOFAS, FURNITURE_TYPE.APPLIANCES, FURNITURE_TYPE.TABLES]},
    status: {type: Number, enum: [FURNITURE_STATUS.ACCEPTED, FURNITURE_STATUS.REJECT]},
    rating: {type: Number, default: 0},
    users_id: {type: Schema.Types.ObjectId, ref: 'users'},
    start_time: {type: Number},
    end_time: {type: Number},
    image: {type: Array, default: []}
})

export default mongoose.model('furnitures', furnitures)