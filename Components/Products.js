import React from 'react';
import classes from './Products.module.css';
import { motion } from "framer-motion";

import granEspressoImg from '@/public/images/home/desktop/image-gran-espresso.png';
import planaltoImg from '@/public/images/home/desktop/image-planalto.png';
import piccolloImg from '@/public/images/home/desktop/image-piccollo.png';
import dancheImg from '@/public/images/home/desktop/image-danche.png';
import Product from './Product';

const Products = () => {


    const products = [
        {
            title: 'Gran Espresso',
            description: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
            image: granEspressoImg,
            alt: 'Gran Espresso package'

        },
        {
            title: 'Planalto',
            description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
            image: planaltoImg,
            alt: 'Planalto package'
        },
        {
            title: 'Piccollo',
            description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
            image: piccolloImg,
            alt: 'Piccollo package'
        },
        {
            title: 'Danche',
            description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
            image: dancheImg,
            alt: 'Danche package'
        }
    ]
    return (
        <motion.section
            initial={{
                opacity: 0,
                x: 50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 1 // Animation duration
                }
            }}
            viewport={{ once: true }}
            className={`${classes.products} max-width`}>
            <h2 className={classes.bigTitle}>our collection</h2>
            <div className={classes.productsWrapper}>
                {products.map((product, index) => {
                    return (
                        <Product key={index} title={product.title} description={product.description} image={product.image} alt={product.alt} />
                    )
                })}
            </div>
        </motion.section>
    );
};

export default Products;