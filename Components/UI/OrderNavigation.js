import React from 'react';
import classes from './OrderNavigation.module.css';
const OrderNavigation = ({ qcmList }) => {

    return (
        <div className={classes.navigation}>
            {qcmList.map((qcm, index) => (
                <div key={index} className={`${classes.item} ${qcm.currentNav ? classes.active : ''} ${qcm.navDisabled ? classes.disabled : ''}`}>
                    <span className={`${classes.number}`}>{`0${index + 1}`}</span>
                    <span className={classes.text}>{qcm.category}</span>
                </div>
            ))}

        </div>
    );
};

export default OrderNavigation;