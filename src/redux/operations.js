import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

axios.defaults.baseURL =  "https://financial-scoring-backend.onrender.com/api";

// const DATA_URL= '/data';

export const fetchdata = createAsyncThunk('data', async(_, thunkAPI)=>{
    try {
        const response = await axios.get("https://financial-scoring-backend.onrender.com/api/data");
        return response.data;
        
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addData = createAsyncThunk('data/add', async(data, thunkAPI)=>{
    try {
        const response = await axios.post("https://financial-scoring-backend.onrender.com/api/data", data);
    
        return response.data;
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})

export const addFinancial = createAsyncThunk('financial/add', async(data, thunkAPI)=>{
    try {
        const response = await axios.post("https://financial-scoring-backend.onrender.com/api/finance", data);
    
        return response.data;
    } catch (e){
        toast.error(`Error: ${e.message}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000, 
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return thunkAPI.rejectWithValue(e.message)
    }
})


////////////////////////////////////////////////

// export const fetchproducts = createAsyncThunk('products', async(pageNumber, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${PRODUCT_URL}?page=${pageNumber}&limit=12`);;
//         return response.data;
        
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchIdProducts = createAsyncThunk('products/id', async(_id, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${PRODUCT_URL}/${_id}`);
//         return response.data;
        
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const fetchProductsKeyword = createAsyncThunk('products/keywordNews', async({keyword, pageNumber},thunkAPI) => {
//     try {
//         const response = await axios.get(`${PRODUCT_URL}?keyword=${keyword}&page=${pageNumber}&limit=12`);
//         return response.data;
//     } catch (e) {
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// });

// export const getProductsFilter = createAsyncThunk( 'products/filter', 
//     async ({page=1, limit=12, name, category}, thunkApi,) => {
        
//     const params = new URLSearchParams();
//     params.append('page', page.toString());
//     params.append('limit', limit.toString());

//     if (name) {
//       params.append('keyword', name);
//     }
//     if (category) {
//       params.append('category', category);
//     }

//     try {
//       const response= await axios.get(`${PRODUCT_URL}?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//         toast.error(`Error: ${error.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//       return thunkApi.rejectWithValue({
//         message: error.message,
//         code: error.response.status,
//       });
//     }
//   },
// );

// export const fetchcart = createAsyncThunk('cart', async(_, thunkAPI)=>{
//     try {
//         const response = await axios.get(`${CART_URL}`);
//         return response.data;
        
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const addCart = createAsyncThunk('cart/add', async(data, thunkAPI)=>{
//     try {
//         const response = await axios.post(`${CART_URL}`, data);
    
//         return response.data;
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const deleteCart = createAsyncThunk("cart/deleteCart", async(_id, thunkAPI)=>{
//     try {
//         const response = await axios.delete(`${CART_URL}/${_id}`);
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })

// export const updateCartQuantity = createAsyncThunk('cart/update', async ({ _id, quantity }, thunkAPI) => {
//     try {
//         const response = await axios.put(`${CART_URL}/update`, { _id, quantity: Number(quantity) });
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });


// export const addCartFinish = createAsyncThunk('cart/addcheckout', async(data, thunkAPI)=>{
//     try {
   
//         const response = await axios.post(`${CART_URL}/checkout`, data);
//         NotificationManager.success('Your order was created successfully!', 'Success');
//         return response.data;
//     } catch (e){
//         toast.error(`Error: ${e.message}`, {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 5000, 
//             hideProgressBar: true,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//         });
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })