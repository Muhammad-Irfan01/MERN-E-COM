import {configureStore} from '@reduxjs/toolkit'
import { rootReducer } from './Redux/MainReducer';
import { thunk } from 'redux-thunk';

const Store = configureStore({
    reducer : rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default Store