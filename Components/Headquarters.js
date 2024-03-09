import React from 'react';
import classes from './Headquarters.module.css';
import Headquarter from './Headquarter';
import illustrationUK from '../public/images/about/desktop/illustration-uk.svg';
import illustrationAustralia from '../public/images/about/desktop/illustration-australia.svg';
import illustrationCanada from '../public/images/about/desktop/illustration-canada.svg';

const Headquarters = () => {
    return (
        <section className={`${classes.headquarters} max-width`}>
            <div className={classes.container}>
                <h2>Our headquarters</h2>
                <div className={classes.wrapper}>
                    <Headquarter title='United Kingdom' adress='68 Asfordby Rd' city='Alcaston' code='SY6 1YA' phoneNumber='+44 1241 918425' icon={illustrationUK} alt='United Kingdom' />
                    <Headquarter title='Canada' adress='1528 Eglinton Avenue' city='Toronto' code='Ontario M4P 1A6' phoneNumber='+1 416 485 2997' icon={illustrationCanada} alt='Canada' />
                    <Headquarter title='Australia' adress='36 Swanston Street' city='Kewell' code='Victoria' phoneNumber='+61 4 9928 3629' icon={illustrationAustralia} alt='Australia' />
                </div>
            </div>
        </section>
    );
};

export default Headquarters;