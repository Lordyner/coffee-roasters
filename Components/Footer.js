import React, { useContext } from 'react';
import { motion } from "framer-motion";
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

        <motion.footer
            initial={{
                opacity: 0,
                x: -50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 1 // Animation duration
                }
            }}
            viewport={{ once: true }}

            className={`${classes.footer} max-width`}>
            <div className={`${classes.wrapper}`}>
                <Image src={logo} alt="logo" className={classes.logo} />
                <div className={`${classes.links}`}>
                    <Link href="/" className={classes.link}>Home</Link>
                    <Link href="/about" className={classes.link}>About us</Link>
                    <Link href="/subscribe" className={classes.link}>Create your plan</Link>
                </div>
                <div className={`${classes.socials}`}>
                    <Image src={facebookIcon} alt="facebook" />
                    <Image src={twitterIcon} alt="twitter" />
                    <Image src={instagramIcon} alt="instagram" />
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;