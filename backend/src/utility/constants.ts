
export const ROLE = {
    CUSTOMER: 0,
    VENDOR: 1
}

export const ROLE_REV = {
    0: "Constumer",
    1: "Vendor"
}

export const FURNITURE_TYPE = {
    TABLES: 0,
    CHAIRS: 1,
    APPLIANCES: 2,
    DINNING_TABLE: 3,
    SOFAS: 4,
    BEDS: 5
}

export const FURNITURE_TYPE_REV = {
    0: 'Tables',
    1: 'Chairs',
    2: 'Appliances',
    3: 'Dining',
    4: 'Sofas',
    5: 'Beds',
  };

export const FURNITURE_STATUS = {
    REJECT: 0,
    ACCEPTED: 1
}

export const SALT_ROUNDS = 10
export const EMAIL_PATTERN = "^[a-zA-Z]{1,}[.+_-]{0,1}[a-zA-Z0-9]{1,}@[a-zA-Z]{1,}[.+_-]{1}[a-zA-Z]{2,}[.+_-]{0,1}[a-zA-Z]{0,3}$"
export const PASSWORD_PATTERN = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$"
export const EXPRIES_IN="1d"
export const MOBILE_NO_PATTERN="^[0-9]{10}$"
export const HISTORY_TYPE = {
    VENDOR_HISTORY: 0,
    CUSTOMER_HISTORY: 1,
    ADD_CART: 2,
    ADD_WISHLIST: 3
}

export const REMOVE_HISTORY_TYPE = [HISTORY_TYPE.ADD_CART, HISTORY_TYPE.ADD_WISHLIST]

