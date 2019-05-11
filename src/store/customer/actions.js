import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, SEARCH_CUSTOMER } from './types';
import { replace, lowerCase } from 'lodash';

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

export const searchCustomer = list => {
    return {
        type: SEARCH_CUSTOMER,
        payload: list,
    };
};

export const searching = (search, customers) => dispatch => {
    let searchList = [];
    if (customers.length) {
        customers.map(customer => {
            let fullName = `${customer.firstName}${customer.lastName}`;
            let flatFilterByName = replace(lowerCase(search), /\s/g, '');
            let flatFullName = replace(lowerCase(fullName), /\s/g, '');
            let hasCustomer = flatFullName.indexOf(flatFilterByName);
            if (hasCustomer !== -1) {
                searchList.push(customer);
            }
            return searchList;
        });
    }
    dispatch(searchCustomer(searchList));
};
