import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchPhotos=createAsyncThunk('photos/fetchPhotos',async()=>{
    const res= await axios.get('https://jsonplaceholder.typicode.com/photos');
    // console.log(res.data);
    return res.data;
})

const photoSlice= createSlice({
    name:'photos',
    initialState:{
        isLoading:false,
        photos:[],
        error:null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchPhotos.pending, (state)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchPhotos.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.photos=action.payload;
            state.error=null;
        })
        builder.addCase(fetchPhotos.rejected, (state, action)=>{
            state.isLoading=false;
            state.photos=[];
            state.error=action.error.message;
        })
    }
})

export default photoSlice.reducer;