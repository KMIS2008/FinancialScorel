import {addFinancial} from '../operations';
import { createSlice} from '@reduxjs/toolkit';

const allFinancial ={
    indicators:[],
    isLoading: false,
    error: false, 
}

const handlPending = (state)=> {
    state.isLoading = true}

// const handlFulfilled = (state, action)=>{
//     state.data = action.payload;
//     state.isLoading = false;
//     state.error = null;
//  }

 const handlFulfilledAdd = (state, action)=>{
    state.indicators.push(action.payload);
    state.isLoading = false;
    state.error = null;
  }

//   const handlFulfilledDelete = (state, action)=>{
//     state.orders = state.orders.filter(order => order._id !== action.payload._id);
//     }

//     const handlFulfilledUpdate = (state, action) => {
//         const index = state.orders.findIndex(order => order._id === action.payload._id);
//         if (index !== -1) {
//             state.orders[index].quantity = action.payload.quantity;
//         }
//         state.isLoading = false;
//         state.error = null;
//     };

//     const handlFulfilledAddFinish = (state, action)=>{
//         state.finishorders.push(action.payload);
//         state.isLoading = false;
//         state.error = null;
//       }

const handlReject =(state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
}

const financialSlice = createSlice({
    name:'indicators',
    initialState: allFinancial,
       
       extraReducers:
       builder=>{
        builder.addCase(addFinancial.pending, handlPending)
        .addCase(addFinancial.fulfilled, handlFulfilledAdd)
        .addCase(addFinancial.rejected, handlReject)
       }
})

export const financialReducer = financialSlice.reducer;