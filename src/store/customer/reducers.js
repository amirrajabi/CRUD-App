import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

const initialState = {
    customers: [
        {
            firstName: 'Amir',
            lastName: 'Rajabi',
            dob: '20/09/1979',
            id: 1,
        },
    ],
    currentCustomer: 0,
};

export function customerReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return {
                customers: [...state.customers, action.payload],
            };
        case EDIT_CUSTOMER:
            return {
                ...state,
                currentCustomer: action.meta.id,
            };
        case DELETE_CUSTOMER:
            return {
                customers: state.customers.filter(customer => customer.id !== action.meta.id),
            };
        default:
            return state;
    }
}
