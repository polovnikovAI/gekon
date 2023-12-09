import React, { useState } from 'react';
import ProductCard from '../components/UI/ProductCard/productCard';
import JBL4325 from '../photos/JBL4325/DSC_9886.JPG';
import BKL_08505 from '../photos/production/BKL_0850.jpg';
import DIATONE2017 from '../photos/restorationDiatone2017/2017-chopchop-1000.jpg';
import  TLM1500 from '../photos/TLM12015/TLM1/1500/BKL_9636.jpg';


// в будущем адаптировать все: вытягивать все из бд через fetch и через map создавать все



const Gallery = () => {

    const [galleryData , setGalleryData] = useState([])
    fetch('/api/gallery').then(response => response.json()).then(response => setGalleryData(response))

    const productImage = [JBL4325, BKL_08505, DIATONE2017, TLM1500]
    return (
        <div style={{marginTop: '100px' , display: 'flex' , justifyContent: 'center' , alignItems: 'center' , flexDirection: 'column' }}>

            {galleryData.map (item => 

                <ProductCard key={item.product_id} data = {item.product_description} title = {item.product_name} img = {productImage[item.product_id-1]}/> 
                
                )}


        </div>
    );
};

export default Gallery;