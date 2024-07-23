import mongoose from "mongoose";
import { ROLE } from "../utility/constants";
import uniqueValidator from "mongoose-unique-validator";

const users = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: Number, enum: [ROLE.CUSTOMER, ROLE.VENDOR]},
    status: {type: Number, default: 0},
    address: {type: String},
    lat: {type: Number},
    lng: {type: Number},
    mobile_no: {type: String},
    country_code: {type: String},
    rating: {type: Number}
}, {timestamps: true})

users.plugin(uniqueValidator, {
    name: "Unique Validation Error",
  message: " Unique {PATH} required",
})

export default mongoose.model('users', users)