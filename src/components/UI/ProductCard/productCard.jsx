import React from 'react';
import classes from './productCard.module.css';


const ProductCard = ({data, title, img}) => {


    
    return (
        <div className={classes.productCard}>
            
            <img className={classes.productImg} width="300" height="500" 
                src={img}>      
            </img>

            <div className={classes.productTitle}>
                {title}
            </div>


            <div className={classes.productData}>
                {data}
            </div>

            


        </div>
    );
};

export default ProductCard;