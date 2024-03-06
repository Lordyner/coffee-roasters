import React from 'react';
import classes from './SubscribeHero.module.css';
const SubscribeHero = () => {
    return (
        <section className={`${classes.subscribe} max-width`}>
            <div className={classes.wrapper}>
                <h1>Create a Plan</h1>
                <p className={classes.description}>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
            </div>
        </section>
    );
};

export default SubscribeHero;