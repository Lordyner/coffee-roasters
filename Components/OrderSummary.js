import React, { useContext } from 'react';
import classes from './OrderSummary.module.css';
import GlobalContext from '@/Store/GlobalContext';
const OrderSummary = () => {

    const { selectedCategory } = useContext(GlobalContext);
    const { selectedBeanType } = useContext(GlobalContext);
    const { selectedQuantity } = useContext(GlobalContext);
    const { selectedFrequency } = useContext(GlobalContext);
    const { selectedGroundingMethod } = useContext(GlobalContext);

    return (
        <div className={classes.container}>
            <h5>Order summary</h5>

            {/* {qcmList[0].answers[0].isSelected && <p className={classes.summary}>I drink my coffee using <span className={classes.choice}>{selectedCategory}</span>, with a <span className={classes.choice}>{selectedBeanType}</span> type of bean. <span className={classes.choice}>{selectedQuantity}</span>, send to me <span className={classes.choice}>{selectedFrequency}</span></p>}
            {!qcmList[0].answers[0].isSelected && <p className={classes.summary}>I drink my coffee as <span className={classes.choice}>{selectedCategory}</span>, with a <span className={classes.choice}>{selectedBeanType}</span> type of bean. <span className={classes.choice}>{selectedQuantity}</span>, ground ala <span className={classes.choice}>{selectedGroundingMethod}</span>, send to me <span className={classes.choice}>{selectedFrequency}</span></p>} */}
        </div>
    );
};

export default OrderSummary;