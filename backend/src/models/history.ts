import mongoose from "mongoose";
import { HISTORY_TYPE } from "../utility/constants";

const historys = new mongoose.Schema({
    users_id: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    furnitures_id: {type: mongoose.Schema.Types.ObjectId, ref: 'furnitures'},
    time: {type: Number},
    type: {type: Number, enum: [Object.values(HISTORY_TYPE)]}
})

export default mongoose.model('historys', historys)