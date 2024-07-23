
export const createHistoryValidation = {
    type: "object",
    properties: {
        type: {
            type: "number",
            errorMessage: {
                type: "History type must be number"
            }
        },
        furniture_id: {
            type: "string",
            errorMessage: {
                type: "Furniture Id must be number"
            }
        }
    },
    required: ["type", "furniture_id"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            type: "History type must be Number",
            furniture_id: "Furniture ID must be string"
        },
        required: {
            type: "History type is required",
            furniture_id: "Furniture ID is required"
        }
    }
}

export const removeHistoryValidation = {
    type: "object",
    properties: {
        type: {
            type: "number",
            errorMessage: {
                type: "History type must be number"
            }
        },
        id: {
            type: "string",
            errorMessage: {
                type: "History Id must be number"
            }
        }
    },
    required: ["type", "id"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            type: "History type must be Number",
            furniture_id: "History ID must be string"
        },
        required: {
            type: "History type is required",
            furniture_id: "History ID is required"
        }
    }
}

export const getHistoryValidation = {
    type: "object",
    properties: {
        type: {
            type: "number",
            errorMessage: {
                type: "History type must be number"
            }
        },
        users_id: {
            type: "string",
            errorMessage: {
                type: "Users Id must be number"
            }
        },
        furnitures_id: {
            type: "string",
            errorMessage: {
                type: "Furnitures Id must be number"
            }
        },
        limit: {
            type: "number",
            errorMessage: {
                type: "Limit must be number"
            }
        },
        skip: {
            type: "number",
            errorMessage: {
                type: "Skip must be number"
            }
        }
    },
    required: ["type", "limit", "skip"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            type: "History type must be Number",
            furnitures_id: "History ID must be string",
            users_id: "Users ID must be string"
        },
        required: {
            type: "History type is required",
            limit: "Limit is required",
            skip: "Skip is required"
        }
    }
}

