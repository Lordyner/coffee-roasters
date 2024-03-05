import iconArrow from '@/public/images/plan/desktop/icon-arrow.svg';
import Image from 'next/image';
import { useContext, useState } from 'react';
import classes from './QCM.module.css';
import GlobalContext from '@/Store/GlobalContext';

const QCM = ({ questionIndex, qcm, nextQuestionToAnswerIndex, setNextQuestionToAnswerIndex, onClickAnswer }) => {
    console.log(qcm);
    const [isFolded, setIsFolded] = useState(qcm.folded);
    // const [answers, setAnswers] = useState(qcm.answers);
    const [isDisabled, setIsDisabled] = useState(qcm.disabled);

    const { selectedCategory, setSelectedCategory } = useContext(GlobalContext);
    const { setSelectedBeanType } = useContext(GlobalContext);
    const { setSelectedQuantity } = useContext(GlobalContext);
    const { setSelectedGroundingMethod } = useContext(GlobalContext);
    const { setSelectedFrequency } = useContext(GlobalContext);

    const { orderSummaryTemplateA, setOrderSummaryTemplateA } = useContext(GlobalContext);


    // const handleClickAnswer = (index) => {
    //     selectAndUnselectAnswers(index);


    //     // Update currentQuestionIndex ( //&& questionIndex <= nextQuestionToAnswerIndex)
    //     if (questionIndex >= nextQuestionToAnswerIndex && questionIndex < 4) setNextQuestionToAnswerIndex(questionIndex + 1);


    // }
    const handleClickQuestion = () => {
        // Fold or unfold the question, only if it's not disabled
        if (!isDisabled) {
            setIsFolded(!isFolded);
        }
    }

    return (
        <div className={`${classes.qcm} ${qcm.disabled ? classes.disabled : ''}`}>
            <div className={classes.header} onClick={() => handleClickQuestion()}>

                <h3>{qcm.title}</h3>
                <Image src={iconArrow} alt="arrow" className={`${classes.arrowIcon} ${isFolded ? classes.up : classes.down}`} />
            </div>
            <div className={`${classes.answers} ${isFolded ? classes.folded : ''}`}>
                {qcm.answers.map((answer, index) => (
                    <div key={index} className={`${classes.answer} ${answer.isSelected ? classes.selected : ''}`} onClick={() => onClickAnswer(questionIndex, index)}>
                        <h4>{answer.title}</h4>
                        <p>{answer.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QCM;