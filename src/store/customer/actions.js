import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

function createCustomer(newCustomer) {
    return {
        type: CREATE_CUSTOMER,
        payload: newCustomer,
    };
}

function deleteCustomer(id: number) {
    return {
        type: DELETE_CUSTOMER,
        meta: {
            id,
        },
    };
}

function editCustomer(id: number) {
    return {
        type: EDIT_CUSTOMER,
        meta: {
            id,
        },
    };
}

export default {
    createCustomer,
    deleteCustomer,
    editCustomer,
};
