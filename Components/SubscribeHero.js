import React from 'react';
import classes from './SubscribeHero.module.css';
import { motion } from "framer-motion";

const SubscribeHero = () => {
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

            className={`${classes.subscribe} max-width`}>
            <div className={classes.wrapper}>
                <h1>Create a Plan</h1>
                <p className={classes.description}>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
            </div>
        </motion.section>
    );
};

export default SubscribeHero;