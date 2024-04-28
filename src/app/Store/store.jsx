/* eslint-disable no-unused-vars */
import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../../Features/photos/photosSlice';

const store= configureStore({
    reducer:{
        photos: photosReducer,
    }
})

export default store;