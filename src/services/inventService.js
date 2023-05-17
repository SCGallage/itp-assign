import axios from "axios";
import {toast} from "react-toastify"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

//item add to inventory
export const addInventItem = async (inventItemData) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}/api/InventoryItems/addInventoryItem`, inventItemData )
        
        if (response.statusText === "OK") {

            toast.success("Item Added to Inventory Successfully")
        }

        return response.data

    } catch (error) {
        const message = (
            error.response && error.response.data && error.response.data.message) 
            || error.message || error.toString();

        toast.error(message) 
    }
}





















/*import axios from "axios";


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/InventoryItems/addInventoryItem`


//create new invent item and send data to the backend
const createInvent = async (formData) =>{
    const response = await axios.post(API_URL, formData);
    return  response.data;
};

const inventService = {
    createInvent,
}
//access create invent through inventService
export default inventService;*/














































/*import axios from "axios"

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL


export const addinvent = async (addInventData) => {
    try {
         const response = await axios.post(`${BACKEND_URL}/api/InventoryItems/addInventoryItem`, addInventData, {withCredentials: true})

         if (response.statusText == "OK") {
            console.success("Item addded to Inventory succesfully")
         }

         return response.data
    } catch (error) {
           const message = (
            error.response && error.response.data && error.response.data.message
           ) || error.message || error.toString();

           console.error(message)
        }
}*/





















/*import axios from 'axios'


const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


//create new invent item
const createInvent = async(formData) => {
    const response = await axios.post(`${BACKEND_URL}/api/InventoryItems/addInventoryItem`, formData);
    return response.data;
};


const inventService = {
    createInvent,    
}

export default inventService;*/