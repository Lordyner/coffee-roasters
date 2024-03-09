import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Hero.module.css';
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <motion.div
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
            <div className={`${classes.wrapper} `}>

                <div className={classes.text}>
                    <h1>Great coffee made simple.</h1>
                    <p className={classes.description}> Start your mornings with the world&apos;s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                </div>
                <Link href="/subscribe" className='primary-link'>Create your plan</Link>
            </div>
        </motion.div>
    );
};

export default Hero;