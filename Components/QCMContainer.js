import React, { useContext, useState } from 'react';
import classes from './QCMContainer.module.css';
import QCM from './UI/QCM';
import GlobalContext from '@/Store/GlobalContext';
import OrderNavigation from './UI/OrderNavigation';
const QCMContainer = ({ qcmList, onClickAnswer }) => {

    const { isDesktopResolution } = useContext(GlobalContext);
    const [nextQuestionToAnswerIndex, setNextQuestionToAnswerIndex] = useState(0);
    return (
        <div className={`${classes.container}`}>
            {isDesktopResolution && <OrderNavigation nextQuestionToAnswerIndex={nextQuestionToAnswerIndex} />}
            <div className={classes.qcmContainer}>
                {qcmList.map((qcm, index) => (
                    <QCM key={index} questionIndex={index} qcm={qcm} nextQuestionToAnswerIndex={nextQuestionToAnswerIndex} setNextQuestionToAnswerIndex={setNextQuestionToAnswerIndex} onClickAnswer={onClickAnswer} />
                ))}
            </div>
        </div>
    );
};

export default QCMContainer;