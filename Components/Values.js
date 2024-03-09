import React from 'react';
import classes from './Values.module.css';
import iconCoffeeBean from '../public/images/home/desktop/icon-coffee-bean.svg';
import iconGift from '../public/images/home/desktop/icon-gift.svg';
import iconTruck from '../public/images/home/desktop/icon-truck.svg';
import Value from './Value';
import { motion } from "framer-motion";

const Values = () => {
    return (
        <motion.section

            initial={{
                opacity: 0,
                x: -50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 1 // Animation duration
                }
            }}
            viewport={{ once: true }}

            className={`${classes.values} max-width`}>
            <div className={classes.container}>
                <div className={classes.text}>

                    <h2>Why choose us?</h2>
                    <p>A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                </div>
                <div className={`${classes.valuesWrapper}`}>
                    <Value icon={iconCoffeeBean} alt="Coffee Bean" title="Best quality" description="Discover an endless variety of the world's best artisan coffee from each of our roasters." />
                    <Value icon={iconGift} alt="Gift" title="Exclusive benefits" description="Special offers and swag when you subscribe, including 30% off your first shipment." />
                    <Value icon={iconTruck} alt="Truck" title="Free shipping" description="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed." />
                </div>
            </div>
        </motion.section>
    );
};

export default Values;