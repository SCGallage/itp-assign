import {createSlice} from '@reduxjs/toolkit'
const name = JSON.parse(localStorage.getItem("id"))

const initialState= {
    name: name ? name: "",
    inventItem : {
        itemName: "",
        sku: "",
        recieveDate: "",
        category: "",
        condition: "",
        brand: "",
        initialPrice: "",
        initialQuantity: "",
        totalPrice: "",
        supplier: "",
    },
}

const inventSlice = createSlice({
    name: "invent",
    initialState,
    reducers:{
        SET_INVENT(state, action){
            const itemDetail = action.payload;
            state.inventItem.itemName = itemDetail.itemName;
            state.inventItem.sku = itemDetail.sku;
            state.inventItem.recieveDate = itemDetail.recieveDate;
            state.inventItem.category = itemDetail.category;
            state.inventItem.condition = itemDetail.condition;
            state.inventItem.brand = itemDetail.brand;
            state.inventItem.initialPrice = itemDetail.initialPrice;
            state.inventItem.initialQuantity = itemDetail.initialQuantity;
            state.inventItem.totalPrice = itemDetail.totalPrice;
            state.inventItem.supplier = itemDetail.supplier;
        },
    },
});

export const {SET_INVENT} = inventSlice.actions;

//exporting an inidividual state
export const selectInvent = (state) => state.invent.inventItem;

export default inventSlice.reducer;




















/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import inventService from "./inventService";


const initialState ={
    invent: null,
    invents: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",

};

//create new invent item and createAsyncThunk to execute http request
export const createInvent = createAsyncThunk(
    "invents/create",
    async(formData, thunkAPI) =>{
        try {
            return await inventService.createInvent(formData)

        } catch (error) {
            const message = (
            error.response && error.response.data && error.response.data.message
           ) 
           || error.message 
           || error.toString();

           console.log(message);
           return thunkAPI.rejectWithValue(message)
        }
    }
)


const inventSlice = createSlice({
    name: "invent",
    initialState,
    reducers: {
        CALC_STORE_VALUE(state, action){
            console.log("Invent value");
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(createInvent.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(createInvent.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            console.log(action.payload);
            state.invents.push (action.payload);
            console.success ("Item added Successfully")
        })
        .addCase(createInvent.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            console.error(action.payload);           
        })
    }
});

export const {CALC_STORE_VALUE} = inventSlice.actions;
export const selectIsLoading = (state) => state.invent.isLoading;
export default inventSlice.reducer*/


















/*import { createSlice } from '@reduxjs/toolkit'
const name = JSON.parse(localStorage.getItem("name"))

const initialState = {
    isLoggedIn: false,

    name: name ? name : "",
    inventory: {
        itemName: "",
        sku: "",
        recieveDate: "",
        category: "",
        condition: "",
        brand: "",
        initialPrice: "",
        initialQuantity: "",
        totalPrice: "",
        supplier: "",
    },
}

const inventSlice = createSlice({
    name: "inventItem",
    initialState,
    reducers: {
        
        SET_INVENT(state, action) {
            const invent = action.payload;
            state.inventory.itemName = invent.itemName;
            state.inventory.sku = invent.sku;
            state.inventory.recieveDate = invent.recieveDate;
            state.inventory.category = invent.category;
            state.inventory.condition = invent.condition;
            state.inventory.brand = invent.brand;
            state.inventory.initialPrice = invent.initialPrice;
            state.inventory.initialQuantity = invent.initialQuantity;
            state.inventory.totalPrice = invent.totalPrice;
            state.inventory.supplier = invent.supplier;
        },
    },
});


export const {SET_INVENT } = inventSlice.actions;

//exporting an individual state
export const selectIsLoggedIn = (state) => state.inventItem.isLoggedIn
export const selectName = (state) => state.inventItem.name
export const selectInvent = (state) => state.inventItem.inventory
export const selectFilteredInvent = (state) => state.inventItem.filteredInvent;

export default inventSlice.reducer;*/










































//import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//import inventService from "./inventService";
/*import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'

const initialState = {
    inventItem: null,
    inventItems: [],
    isError: false,
    isSucess:false,
    isLoading: false,
    message:"",
    totalInventValue: 0,
    outOfStock: 0,
    category: [],
};

//CREATE NEW INVENT ITEM
export const createInvent = createAsyncThunk(
    "InventItems/create",
    async(formData, thunkAPI) => {
        try {
            return await inventService.createInvent(formData)

        } catch (error) {
            const message = (error.response && error.response.data && 
                error.response.data.message) 
                || error.message 
                || error.toString();

                console.log(message)
                return thunkAPI.rejectWithValue(message)

        }
    }
);



const inventSlice = createSlice ({
    name:"inventItem",
    initialState,
    reducers: {
        CALC_STORE_VALUE (state,action){
            console.log("store value")
        }
    },
    extraReducers: (builder) => {
        builder
        //create item function
        .addCase(createInvent.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createInvent.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isSucess = true;
            state.isError = false;
            console.log(action.payload);
            state.inventItems.push(action.payload);
            //toast.success("Item added to the Inventory Successfully")
        })
        .addCase(createInvent.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            console.error(action.payload);
        })
        
        

        
    },
});

export const {CALC_STORE_VALUE} = inventSlice.actions;
export const {CALC_OUTOFSTOCK} = inventSlice.actions;
export const {CALC_CATEGORY} = inventSlice.actions;



//export const selectIsLoading = (state) => state.inventItem.isLoading;
export const selectIsLoading = (state) => state.inventItem.isLoading;
export const selectinventItem = (state) => state.inventItem.inventItem;
export const selectTotalInventValue = (state) => state.inventItem.totalInventValue;
export const selectOutOfStock = (state) => state.inventItem.outOfStock;
export const selectCategory = (state) => state.inventItem.category;

export default inventSlice.reducer;*/
