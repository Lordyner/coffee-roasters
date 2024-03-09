import React, { useContext } from 'react';
import classes from './Commitment.module.css';
import Image from 'next/image';
import imageCommitmentMobile from '@/public/images/about/mobile/image-commitment.jpg';
import imageCommitmentTablet from '@/public/images/about/tablet/image-commitment.jpg';
import imageCommitmentDesktop from '@/public/images/about/desktop/image-commitment.jpg';
import GlobalContext from '@/Store/GlobalContext';

const Commitment = () => {

    const { isMobileResolution } = useContext(GlobalContext);
    const { isTabletResolution } = useContext(GlobalContext);
    return (
        <section className={`${classes.commitment} max-width`}>
            <div className={classes.wrapper}>
                <Image src={isMobileResolution ? imageCommitmentMobile : isTabletResolution ? imageCommitmentTablet : imageCommitmentDesktop}
                    className={classes.baristaImg}
                    alt='barista making a coffee'
                />
                <div className={classes.content}>
                    <h2>Our commitment</h2>
                    <p className={classes.description}> We&apos;re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world&apos;s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </div>
        </section>
    );
};

export default Commitment;