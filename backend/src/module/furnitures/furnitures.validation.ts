import { Schema } from "ajv";

export const createFurnitureValidation: Schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
            errorMessage: {
                type: "Furniture Name must be string",
                minLength: "Furniture Name must be min 3 characters"
            }
        },
        description: {
            type: "string",
            minLength: 15,
            errorMessage: {
                type: "Furniture Description must be string",
                minLength: "Furniture Description must be min 15 characters"
            }
        },
        price: {
            type: "number",
            errorMessage:{
                type: "Furniture Price must be number"
            }
        },
        type: {
            type: "number",
            errorMessage: {
                type: "Furniture type must be number"
            }
        }
        //Add images
    },
    required: ["name", "description", "price", "type"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            name: "Furniture name must be string",
            description: "Furniture description must be string",
            price: "Furniture Price must be number",
            type: "Furniture Type must be number"
        },
        required: {
            name: "Furniture name is required",
            description: "Furniture description is required",
            price: "Furniture Price is required",
            type: "Furniture Type is required"
        }
    },
    additionalProperties: false
}

export const updateFurnitureValidation: Schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
            errorMessage: {
                type: "Furniture Name must be string",
                minLength: "Furniture Name must be min 3 characters"
            }
        },
        description: {
            type: "string",
            minLength: 15,
            errorMessage: {
                type: "Furniture Description must be string",
                minLength: "Furniture Description must be min 15 characters"
            }
        },
        price: {
            type: "number",
            errorMessage:{
                type: "Furniture Price must be number"
            }
        },
        type: {
            type: "number",
            errorMessage: {
                type: "Furniture type must be number"
            }
        },
        rating: {
            type: "number",
            errorMessage: {
                type: "Furniture Rating must be number"
            }
        },
        start_time: {
            type: "number",
            errorMessage: {
                type: "Furniture rented time must be number"
            }
        },
        end_time: {
            type: "number",
            errorMessage: {
                type: "Furniture rented time must be number"
            }
        },
        id: {
            type: "string",
            errorMessage: {
                type: "Furniture ID must be string"
            }
        }
        //Add images
    },
    required: ["id"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            name: "Furniture name must be string",
            description: "Furniture description must be string",
            price: "Furniture Price must be number",
            type: "Furniture Type must be number",
            start_time: "Furniture rented time must be number",
            end_time: "Furniture rented time must be number",
            rating: "Furniture rating must be number",
            id: "Furniture ID must be string"
        },
        required: {
            id: "Furniture ID is required"
        }
    },
    additionalProperties: false
}

export const getFurnitureValidation:Schema = {
    type: "object",
    properties: {
        limit: {
            type: "number",
            errorMessage: {
                type: "Furniture Limit must be number"
            }
        },
        skip: {
            type: "number",
            errorMessage: {
                type: "Furniture Skip must be number"
            }
        },
        filters: {
            type: "object",
            properties: {
                type: {
                    type: "array",
                    minLength: 1,
                    errorMessage: {
                        type: "Furniture Type must be array",
                        minLength: "Furniture Type must not be empty"
                    }
                },
                price: {
                    type: "object",
                    properties: {
                        start_price: {
                            type: "number",
                            errorMessage: {
                                type: "Furniture start price must be number"
                            }
                        },
                        end_price: {
                            type: "number",
                            errorMessage: {
                                type: "Furniture end price must be number"
                            }
                        }
                    },
                    errorMessage: {
                        type: "Price must be Object",
                        properties: {
                            start_price: "Furniture start price must be number",
                            end_price: "Furniture end price must be number"
                        }
                    },
                    additionalProperties: true
                },
                rating: {
                    type: "object",
                    properties: {
                        start_rating: {
                            type: "number",
                            errorMessage: {
                                type: "Furniture start rating must be number"
                            }
                        },
                        end_rating: {
                            type: "number",
                            errorMessage: {
                                type: "Furniture end rating must be number"
                            }
                        }
                    },
                    errorMessage: {
                        type: "Rating must be Object",
                        properties: {
                            start_price: "Furniture start rating must be number",
                            end_price: "Furniture end rating must be number"
                        }
                    },
                    additionalProperties: true
                }
            },
            errorMessage: {
                type: "Filter must be JSON",
                properties: {
                    type: "Furniture Type must be array",
                    price: "Furniture price must be JSON",
                    rating: "Furniture rating must be JSON"
                }
            },
            additionalProperties: true
        },
        sort: {
            type: "object",
            properties: {
                name: {
                    type: "number",
                    enum: [1, -1],
                    errorMessage: {
                        type: "Furniture name must be number",
                        enum: "Furniture name sort value must be 1 or -1"
                    }
                },
                rating: {
                    type: "number",
                    errorMessage: {
                        type: "Furniture Rating must be number"
                    }
                },
                price: {
                    type: "number",
                    errorMessage: {
                        type: "Furniture Price must be number"
                    }
                }
            },
            errorMessage: {
                type: "Sort must be JSON",
                properties: {
                    name: "Furniture Name must be number",
                    price: "Furniture Price must be number",
                    rating: "Furniture Rating must be number"
                }
            },
            additionalProperties: true
        }
    },
    required: ["limit", "skip"],
    errorMessage: {
        type: "Input must be JSON",
        properties: {
            limit: "Limit must be number",
            skip: "Skip must be number",
            filters: "Filters must be JSON",
            sort: "Sort must be JSON"
        },
        required: {
            limit: "Limit is required",
            skip: "Skip is required"
        }
    },
    additionalProperties: true
}

export const getFurnitureByIdValidation: Schema = {
    type: "object",
    properties: {
        id: {
            type: "string",
            errorMessage: {
                type: "Furniture ID is required"
            }
        }
    },
    required: ["id"],
    errorMessage: {
        type: "Input must be URL params",
        properties: {
            id: "Furniture ID must be string"
        },
        required: {
            id: "Furniture ID is required"
        }
    },
    additionalProperties: false
}