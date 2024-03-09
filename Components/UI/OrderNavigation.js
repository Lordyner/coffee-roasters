import React from 'react';
import classes from './OrderNavigation.module.css';
import { motion } from "framer-motion";

const OrderNavigation = ({ qcmList }) => {

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
            className={classes.navigation}>
            {qcmList.map((qcm, index) => (
                <div key={index} className={`${classes.item} ${qcm.currentNav ? classes.active : ''} ${qcm.navDisabled ? classes.disabled : ''}`}>
                    <span className={`${classes.number}`}>{`0${index + 1}`}</span>
                    <span className={classes.text}>{qcm.category}</span>
                </div>
            ))}

        </motion.div>
    );
};

export default OrderNavigation;