import React, { useContext } from 'react';
import classes from './Explication.module.css';
import Link from 'next/link';
import GlobalContext from '@/Store/GlobalContext';
import { motion } from "framer-motion";

const Explication = ({ theme }) => {

    const themeClass = theme === 'light' ? classes.light : classes.dark;
    const { isMobileResolution } = useContext(GlobalContext);
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
            className={`${classes.explication} max-width ${themeClass}`}>
            <div className={classes.wrapper}>
                {theme !== 'dark' && <h2>How it works</h2>}
                {!isMobileResolution && <div className={classes.stepsIcon}></div>}
                <div className={classes.steps}>
                    <div className={classes.step}>
                        {!isMobileResolution && <div className={classes.stepIcon}></div>}
                        <p className={classes.number}>01</p>
                        <h3>Pick your {!isMobileResolution && <br />} coffee</h3>
                        <p className={classes.description}>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className={classes.step}>
                        {!isMobileResolution && <div className={classes.stepIcon}></div>}
                        <p className={classes.number}>02</p>
                        <h3>Choose the {!isMobileResolution && <br />}frequency</h3>
                        <p className={classes.description}>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                    </div>
                    <div className={`${classes.step} ${classes.withoutLine}`}>
                        {!isMobileResolution && <div className={`${classes.stepIcon}`}></div>}
                        <p className={classes.number}>03</p>
                        <h3>Receive and {!isMobileResolution && <br />}enjoy!</h3>
                        <p className={classes.description}>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>
                {theme === 'light' &&
                    <div className={classes.buttonWrapper}>

                        <Link href="/subscribe" className='primary-link'>Create your plan</Link>
                    </div>
                }
            </div>
        </motion.section>
    );
};

export default Explication;