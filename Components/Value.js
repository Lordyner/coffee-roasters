import React from 'react';
import classes from './Value.module.css';
import Image from 'next/image';

const Value = ({ icon, alt, title, description }) => {
    return (
        <div className={classes.card}>
            <Image src={icon} alt={alt} className={classes.icon} />
            <div className={classes.text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default Value;