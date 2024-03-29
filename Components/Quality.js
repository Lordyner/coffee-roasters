import React, { useContext } from 'react';
import { motion } from "framer-motion";

import classes from './Quality.module.css';
import Image from 'next/image';
import imageQualityMobile from '@/public/images/about/mobile/image-quality.jpg';
import imageQualityTablet from '@/public/images/about/tablet/image-quality.jpg';
import imageQualityDesktop from '@/public/images/about/desktop/image-quality.jpg';
import GlobalContext from '@/Store/GlobalContext';

const Quality = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
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
            className={`${classes.quality} max-width`}>
            <div className={classes.wrapper}>


                <div className={classes.content}>
                    <h2>Uncompromising quality</h2>
                    <p className={classes.description}>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                </div>
                <Image src={isMobileResolution ? imageQualityMobile : isTabletResolution ? imageQualityTablet : imageQualityDesktop} className={classes.qualityCoffeeImg} alt='coffee with a flower draw inside' />

            </div>
        </motion.section>
    );
};

export default Quality;