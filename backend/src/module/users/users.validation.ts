import { Schema } from "ajv";
import { EMAIL_PATTERN, MOBILE_NO_PATTERN, PASSWORD_PATTERN, ROLE } from "../../utility/constants";

export const createUserValidation:Schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
            errorMessage: {
                type: "Name must be string",
                minLength: "Name must be min 3 characters"
            }
        },
        email: {
            type: "string",
            pattern: EMAIL_PATTERN,
            errorMessage: {
                type: "Email must be string",
                pattern: "Email is invalid"
            }
        },
        password: {
            type: "string",
            minLength: 8,
            maxLength: 16,
            pattern: PASSWORD_PATTERN,
            errorMessage: {
                type: "Password must be string",
                minLength: "Password must be min 8 characters",
                maxLength: "Password must be max 16 characters",
                pattern: "Password must consist of Upper Case, Lower case, Number and Special Characters"
            }
        },
        username: {
            type: "string",
            minLength: 3,
            errorMessage: {
                type: "User name must be string",
                minLength: "User name must be min 3 characters"
            }
        },
        role: {
            type: "number",
            enum: [ROLE.CUSTOMER, ROLE.VENDOR],
            errorMessage: {
                type: "Role must be number",
                enum: "Select valid role"
            }
        },
        mobile_no: {
            type: "string",
            pattern: MOBILE_NO_PATTERN,
            errorMessage: {
                type: "Mobile number nust be string",
                pattern: "Mobile number must be 10 digits"
            }
        },
        country_code: {
            type: "string",
            errorMessage: {
                type: "Country code must be string"
            }
        }
    },
    required: ["name", "email", "password", "username", "role", "mobile_no", "country_code"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            name: "Name must be string",
            email: "Email must be string",
            password: "Password must be string",
            username: "User name must be string",
            mobile_no: "Mobile Number must be string",
            country_code: "Country code must be string",
        },
        required: {
            name: "Name is required",
            email: "Email is required",
            password: "Password is required",
            username: "User name is required",
            mobile_no: "Mobile Number is required",
            country_code: "Country code is required",
        }
    },
    additionalProperties: false
} 

export const loginUserValidation:Schema = {
    type: "object",
    properties: {
        email: {
            type: "string",
            pattern: EMAIL_PATTERN,
            errorMessage: {
                type: "Email must be string",
                pattern: "Email is invalid"
            }
        },
        password: {
            type: "string",
            pattern: PASSWORD_PATTERN,
            minLength: 8,
            maxLength: 16,
            errorMessage: {
                type: "Password must be string",
                minLength: "Password must be min 8 characters",
                maxLength: "Password must be max 16 characters",
                pattern: "Password must consist of Upper Case, Lower case, Number and Special Characters"
            }
        }
    },
    required: ["email", "password"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            email: "Email must be string",
            password: "Password must be string"
        },
        required: {
            email: "Email is required",
            password: "Password is required"
        }
    },
    additionalProperties: false
}

export const updateUserValidation:Schema = {
    type: "object",
    properties: {
        address: {
            type: "string",
            errorMessage: {
                type: "Address must be string"
            }
        },
        rating: {
            type: "number",
            errorMessage: {
                type: "Rating must be number"
            }
        },
        mobile_no: {
            type: "string",
            pattern: MOBILE_NO_PATTERN,
            errorMessage: {
                type: "Mobile Number must be string",
                pattern: "Mobile Number must be 10 digits"
            }
        },
        country_code: {
            type: "string",
            errorMessage: {
                type: "Country code must be string"
            }
        },
        lat: {
            type: "number",
            errorMessage: {
                type: "Latitude must be number"
            }
        },
        lng: {
            type: "number",
            errorMessage: {
                type: "Longitude must be number"
            }
        },
        name: {
            type: "string",
            minLength: 3,
            errorMessage: {
                type: "User name must be string",
                minLength: "User name must be min 3 characters"
            }
        }
    },
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            address: "Address must be string",
            rating: "Rating must be number",
            country_code: "Country code must be string",
            mobile_no: "Mobile number must be string",
            lat: "Latitude must be number",
            lng: "Longitude must be number",
            name: "User name must be string"
        }
    },
    additionalProperties: false
}