import React, { useContext, useState } from 'react';
import classes from './QCMContainer.module.css';
import QCM from './UI/QCM';
import GlobalContext from '@/Store/GlobalContext';
import OrderNavigation from './UI/OrderNavigation';
import OrderSummary from './OrderSummary';
const QCMContainer = ({ qcmList, onClickAnswer, nextQuestionToAnswerIndex, categorySelected, beanTypeSelected, quantitySelected, groundingMethodSelected, frequencySelected }) => {

    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <div className={`${classes.container} max-width`}>
            {isDesktopResolution && <OrderNavigation qcmList={qcmList} nextQuestionToAnswerIndex={nextQuestionToAnswerIndex} />}
            <div className={classes.qcmContainer}>
                {qcmList.map((qcm, index) => (
                    <QCM key={index} questionIndex={index} qcm={qcm} onClickAnswer={onClickAnswer} />
                ))}
            </div>
            <OrderSummary qcmList={qcmList} categorySelected={categorySelected} beanTypeSelected={beanTypeSelected} quantitySelected={quantitySelected} groundingMethodSelected={groundingMethodSelected} frequencySelected={frequencySelected} />

        </div>
    );
};

export default QCMContainer;