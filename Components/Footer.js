import React, { useContext } from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/shared/desktop/logo_footer.svg'
import facebookIcon from '@/public/images/shared/desktop/icon-facebook.svg'
import twitterIcon from '@/public/images/shared/desktop/icon-twitter.svg'
import instagramIcon from '@/public/images/shared/desktop/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className={`${classes.footer} max-width`}>
            <div className={`${classes.wrapper}`}>
                <Image src={logo} alt="logo" className={classes.logo} />
                <div className={`${classes.links}`}>
                    <Link href="/" className={classes.link}>Home</Link>
                    <Link href="/" className={classes.link}>About us</Link>
                    <Link href="/" className={classes.link}>Create your plan</Link>
                </div>
                <div className={`${classes.socials}`}>
                    <Image src={facebookIcon} alt="facebook" />
                    <Image src={twitterIcon} alt="twitter" />
                    <Image src={instagramIcon} alt="instagram" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;