import React from 'react';
import classes from './Headquarter.module.css';
import Image from 'next/image';

const Headquarter = ({ title, adress, city, code, phoneNumber, icon, alt }) => {
    return (
        <div className={classes.headquarter}>
            <Image src={icon} alt={alt} />
            <div className={classes.text}>
                <h3>{title}</h3>
                <div className={classes.contactInfo}>
                    <p>{adress}</p>
                    <p>{city}</p>
                    <p>{code}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default Headquarter;