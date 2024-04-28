/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../photos/photosSlice';

const PhotosView = () => {
    const {isLoading,photos,error}= useSelector((state)=>state.photos);
    console.log(photos,error,isLoading);

    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(fetchPhotos());
    },[]);

    return (
        <div>
            {
                isLoading && <h3>Loading ... </h3>
            }
            {
                error && <h3>{error}</h3>
            }
            {
                photos && photos.map(photo=>{
                    return (
                        <img src={photo.url} alt="" />
                    )
                })
            }
        </div>
    );
};

export default PhotosView;