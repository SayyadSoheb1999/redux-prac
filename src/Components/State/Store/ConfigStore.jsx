import { createStore, combineReducers } from 'redux';
import { empReducer } from '../Reducers/emp';
 
 export const configStore=()=>{
    const store = createStore(
        combineReducers({
                empReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__()
    );
    return store;
};