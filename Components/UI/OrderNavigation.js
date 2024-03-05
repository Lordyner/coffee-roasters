import React from 'react';
import classes from './OrderNavigation.module.css';
const OrderNavigation = ({ nextQuestionToAnswerIndex }) => {

    const items = [
        {
            number: '01',
            text: 'Preferences'
        },
        {
            number: '02',
            text: 'Bean Type'
        },
        {
            number: '03',
            text: 'Quantity'
        },
        {
            number: '04',
            text: 'Grind Option'
        },
        {
            number: '05',
            text: 'Deliveries'
        }
    ]
    return (
        <div className={classes.navigation}>
            {items.map((item, index) => (
                <div key={index} className={`${classes.item} ${nextQuestionToAnswerIndex === index ? classes.active : ''}`}>
                    <span className={`${classes.number}`}>{item.number}</span>
                    <span className={classes.text}>{item.text}</span>
                </div>
            ))}

        </div>
    );
};

export default OrderNavigation;