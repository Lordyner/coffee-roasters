import React, { useContext } from 'react';
import classes from './SummaryModal.module.css';
import Link from 'next/link';
import GlobalContext from '@/Store/GlobalContext';
const SummaryModal = ({ qcmList, categorySelected, beanTypeSelected, quantitySelected, groundingMethodSelected, frequencySelected, price, modalOpened, setModalOpened }) => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { modalRef } = useContext(GlobalContext);
    const checkoutHandler = () => {
        modalRef.current.close();
    }


    return (
        <dialog className={classes.dialog} ref={modalRef}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <h2>Order summary</h2>
                </div>
                <div className={classes.body}>
                    <span className={classes.summary}>
                        {qcmList[0].answers[0].isSelected &&
                            <p className={classes.summary}>
                                “I drink my coffee using <span className={classes.choice}>{categorySelected}</span>, with a <span className={classes.choice}>{beanTypeSelected}</span> type of bean. <span className={classes.choice}>{quantitySelected}</span>, send to me <span className={classes.choice}>{frequencySelected}”</span>
                            </p>
                        }

                        {!qcmList[0].answers[0].isSelected &&
                            <p className={classes.summary}>“I drink my coffee as <span className={classes.choice}>{categorySelected}</span>, with a <span className={classes.choice}>{beanTypeSelected}</span> type of bean. <span className={classes.choice}>{quantitySelected}</span> ground ala <span className={classes.choice}>{groundingMethodSelected}</span>, send to me <span className={classes.choice}>{frequencySelected}”</span>
                            </p>
                        }
                    </span>

                    <p className={classes.confirmation}>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
                    <div className={classes.buttonWrapper}>
                        {!isMobileResolution && <p className={classes.price}></p>}
                        <button onClick={checkoutHandler} className='primary-link'>Checkout {isMobileResolution && price}</button>
                    </div>
                </div>
            </div>
        </dialog>

    );
};

export default SummaryModal;