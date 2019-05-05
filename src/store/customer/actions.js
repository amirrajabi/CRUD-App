import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

const createCustomer = newCustomer => {
    return {
        type: CREATE_CUSTOMER,
        payload: newCustomer,
    };
};

const deleteCustomer = id => {
    return {
        type: DELETE_CUSTOMER,
        meta: {
            id,
        },
    };
};

const editCustomer = id => {
    return {
        type: EDIT_CUSTOMER,
        meta: {
            id,
        },
    };
};

export { createCustomer, deleteCustomer, editCustomer };
