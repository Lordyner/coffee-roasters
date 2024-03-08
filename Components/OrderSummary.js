import React, { useContext } from 'react';
import classes from './OrderSummary.module.css';
import GlobalContext from '@/Store/GlobalContext';
const OrderSummary = ({ qcmList, categorySelected, beanTypeSelected, quantitySelected, groundingMethodSelected, frequencySelected, onButtonClick }) => {

    const splittedCategory = categorySelected.split(' ');
    const splittedBeanType = beanTypeSelected.split(' ');
    const splittedQuantity = quantitySelected.split(' ');
    const splittedGroundingMethod = groundingMethodSelected.split(' ');
    const splittedFrequency = frequencySelected.split(' ');

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h5>Order summary</h5>
                {qcmList[0].answers[0].isSelected &&
                    <p className={classes.summary}>
                        “I drink my coffee using <span className={classes.choice}>{categorySelected}</span>, with a <span className={classes.choice}>{beanTypeSelected}</span> type of bean. <span className={classes.choice}>{quantitySelected}</span>, send to me <span className={classes.choice}>{frequencySelected}”</span>
                    </p>
                }

                {!qcmList[0].answers[0].isSelected &&
                    <p className={classes.summary}>“I drink my coffee as <span className={classes.choice}>{categorySelected}</span>, with a <span className={classes.choice}>{beanTypeSelected}</span> type of bean. <span className={classes.choice}>{quantitySelected}</span> ground ala <span className={classes.choice}>{groundingMethodSelected}</span>, send to me <span className={classes.choice}>{frequencySelected}”</span>
                    </p>
                }
            </div>
            <div className={classes.buttonWrapper}>
                <button onClick={onButtonClick}>Create my plan!</button>
            </div>
        </div>
    );
};

export default OrderSummary;