import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER } from './types';

const initialState = {
    customers: [
        {
            firstName: 'Amir',
            lastName: 'Rajabi',
            dob: '20-09-1979',
            id: `${new Date().toLocaleTimeString()}${new Date().toLocaleDateString()}`,
        },
    ],
};

export function customerReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return {
                customers: [...state.customers, action.payload],
            };
        case EDIT_CUSTOMER:
            return {
                customers: state.customers.map(customer =>
                    customer.id === action.payload.id ? action.payload : customer,
                ),
            };
        case DELETE_CUSTOMER:
            return {
                customers: state.customers.filter(customer => customer.id !== action.meta.id),
            };
        default:
            return state;
    }
}
