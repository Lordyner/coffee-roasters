import iconArrow from '@/public/images/plan/desktop/icon-arrow.svg';
import Image from 'next/image';
import { useContext, useState } from 'react';
import classes from './QCM.module.css';
import GlobalContext from '@/Store/GlobalContext';
import { motion } from "framer-motion";

const QCM = ({ questionIndex, qcm, onClickAnswer }) => {
    const [isFolded, setIsFolded] = useState(qcm.folded);
    const [isDisabled, setIsDisabled] = useState(qcm.disabled);


    const list = { hidden: { opacity: 0 } }
    const item = {
        start: { opacity: 0, y: -30, transition: { duration: 0.5, delayChildren: 1 } },

        stop: { opacity: 1, y: 0, transition: { duration: 0.5, delayChildren: 1 } }
    }
    const handleClickQuestion = () => {
        // Fold or unfold the question, only if it's not disabled
        if (!isDisabled) {
            setIsFolded(!isFolded);
        }
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: questionIndex % 2 === 0 ? 50 : -50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 1 // Animation duration
                }
            }}
            viewport={{ once: true }}

            className={`${classes.qcm} ${qcm.disabled ? classes.disabled : ''}`}>
            <div className={classes.header} onClick={() => handleClickQuestion()}>

                <h3>{qcm.title}</h3>
                <Image src={iconArrow} alt="arrow" className={`${classes.arrowIcon} ${isFolded ? classes.up : classes.down}`} />
            </div>
            <motion.div variants={list} className={`${classes.answers} ${isFolded ? classes.folded : ''}`}>
                {qcm.answers.map((answer, index) => (
                    <motion.div
                        variants={item}
                        animate={isFolded ? 'start' : 'stop'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1.05 }}
                        key={index} className={`${classes.answer} ${answer.isSelected ? classes.selected : ''}`}
                        onClick={() => onClickAnswer(questionIndex, index)}
                    >
                        <h4>{answer.title}</h4>
                        <p>{answer.content}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default QCM;