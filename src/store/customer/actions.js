import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

export const createCustomer = newCustomer => {
    return {
        type: CREATE_CUSTOMER,
        payload: newCustomer,
    };
};

export const editCustomer = id => {
    return {
        type: EDIT_CUSTOMER,
        meta: {
            id,
        },
    };
};

export const deleteCustomer = id => {
    return {
        type: DELETE_CUSTOMER,
        meta: {
            id,
        },
    };
};
