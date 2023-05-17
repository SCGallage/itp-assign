import {configureStore} from '@reduxjs/toolkit'
import inventReducer from '../redux/features/invent/inventSlice'
//import { filterReducer } from "../redux/features/invent/inventfilterSlice";

export const store = configureStore({
    reducer:{
        invent: inventReducer,
        //filter: filterReducer,
    },
});