import React, { useContext, useState } from 'react';
import classes from './QCMContainer.module.css';
import QCM from './UI/QCM';
import GlobalContext from '@/Store/GlobalContext';
import OrderNavigation from './UI/OrderNavigation';
const QCMContainer = ({ qcmList, onClickAnswer, nextQuestionToAnswerIndex }) => {

    const { isDesktopResolution } = useContext(GlobalContext);
    return (
        <div className={`${classes.container} max-width`}>
            {isDesktopResolution && <OrderNavigation qcmList={qcmList} nextQuestionToAnswerIndex={nextQuestionToAnswerIndex} />}
            <div className={classes.qcmContainer}>
                {qcmList.map((qcm, index) => (
                    <QCM key={index} questionIndex={index} qcm={qcm} onClickAnswer={onClickAnswer} />
                ))}
            </div>
        </div>
    );
};

export default QCMContainer;