import React from 'react';
import ProductCard from '../components/UI/ProductCard/productCard';
import JBL4325 from '../photos/JBL4325/DSC_9886.JPG';
import BKL_08505 from '../photos/production/BKL_0850.jpg';
import DIATONE2017 from '../photos/restorationDiatone2017/2017-chopchop-1000.jpg';
import  TLM1500 from '../photos/TLM12015/TLM1/1500/BKL_9636.jpg';


// в будущем адаптировать все: вытягивать все из бд через fetch и через map создавать все



const Gallery = () => {

    const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor sagittis lacus a facilisis. In hac habitasse platea dictumst. Maecenas pulvinar eget augue eget rutrum. Suspendisse mollis eget ante non condimentum. Duis ultrices rhoncus metus quis mattis. Quisque luctus purus vulputate, aliquet sapien ac, pellentesque tellus. Curabitur rutrum orci id sollicitudin ultricies.'
    const productCardData = [{name:'JBL4325'  , image:JBL4325, text: data},{name:'JBLBKL_08505'  , image:BKL_08505, text: data} , {name:'DIATONE2017'  , image:DIATONE2017, text: data},{name:'TLM1500'  , image:TLM1500, text: data}]
    return (
        <div style={{marginTop: '100px' , display: 'flex' , justifyContent: 'center' , alignItems: 'center' , flexDirection: 'column' }}>

            {productCardData.map (item => 

                <ProductCard key={item.image} data = {item.text} title = {item.name} img = {item.image}/> 
                
                )}


        </div>
    );
};

export default Gallery;