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