import React from 'react';
import classes from './AboutHero.module.css';
const AboutHero = () => {
    return (
        <section className={`${classes.hero} max-width`}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h1>About us</h1>
                    <p className={classes.aboutUs}> Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;