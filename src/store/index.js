import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { customerReducer } from './customer/reducers';

const rootReducer = combineReducers({
    customer: customerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleWares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middleWares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    return store;
}
