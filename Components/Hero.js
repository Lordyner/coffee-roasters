import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Hero.module.css';
const Hero = () => {

    return (
        <div className={`${classes.hero} max-width`}>
            <div className={`${classes.wrapper} `}>

                <div className={classes.text}>
                    <h1>Great coffee made simple.</h1>
                    <p className={classes.description}> Start your mornings with the world&apos;s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                </div>
                <Link href="/" className='primary-link'>Create your plan</Link>
            </div>
        </div>
    );
};

export default Hero;