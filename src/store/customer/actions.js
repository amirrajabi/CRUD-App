import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

export const createCustomer = newCustomer => {
    return {
        type: CREATE_CUSTOMER,
        payload: newCustomer,
    };
};

export const editCustomer = editCustomer => {
    return {
        type: EDIT_CUSTOMER,
        payload: editCustomer,
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
