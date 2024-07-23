import { NextFunction, Response } from "express";
import { CustomRequest } from "../utility/interface";
import { NOT_ALLOWED } from "../utility/httpcode";
import { ROLE } from "../utility/constants";

function checkAccess() {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        try {
            const decoded_token = req.decoded_token
            if(decoded_token?.role != undefined){
                if(decoded_token?.role === ROLE["CUSTOMER"] && req.originalUrl.indexOf('history/remove') != -1){
                    next()
                }else if(decoded_token.role === ROLE.VENDOR){
                    next()
                }else{
                    return res.status(NOT_ALLOWED).json({status: "error", message: "User does not have sufficent access"})                    
                }
            }else{
                return res.status(NOT_ALLOWED).json({status: "error", message: "User does not have sufficent access"})
            }
        } catch (error) {
            res.status(NOT_ALLOWED).json({status: "error", message: "Some error occured while checking access"})
        }
    }
}

export default checkAccess