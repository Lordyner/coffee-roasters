import React from 'react';
import classes from './AboutHero.module.css';
import { motion } from "framer-motion";

const AboutHero = () => {
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

            className={`${classes.hero} max-width`}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h1>About us</h1>
                    <p className={classes.aboutUs}> Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutHero;