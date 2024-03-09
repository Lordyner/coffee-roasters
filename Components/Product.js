import React from 'react';
import classes from './Product.module.css';
import Image from 'next/image';
const Product = ({ title, description, image, alt }) => {
    return (
        <div className={classes.product}>
            <Image src={image} alt={alt} className={classes.packageImg} />
            <div className={classes.content}>
                <h4>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default Product;