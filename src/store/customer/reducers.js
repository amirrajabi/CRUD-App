import { CREATE_CUSTOMER, DELETE_CUSTOMER, EDIT_CUSTOMER, SEARCH_CUSTOMER } from './types';

const initialState = {
    customers: [],
    customersList: [],
};

export function customerReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload],
                customersList: [...state.customers, action.payload],
            };
        case EDIT_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(customer =>
                    customer.id === action.payload.id ? action.payload : customer,
                ),
                customersList: state.customers.map(customer =>
                    customer.id === action.payload.id ? action.payload : customer,
                ),
            };
        case DELETE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer.id !== action.meta.id),
                customersList: state.customers.filter(customer => customer.id !== action.meta.id),
            };
        case SEARCH_CUSTOMER:
            return {
                ...state,
                customersList: action.payload,
            };
        default:
            return state;
    }
}
