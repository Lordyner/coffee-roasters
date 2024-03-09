import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/shared/desktop/logo.svg';
import { motion } from "framer-motion";


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);

    const { isMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);



    return (
        <motion.header
            initial={{
                opacity: 0,
                x: 50
            }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 1 // Animation duration
                }
            }}
            viewport={{ once: true }}
            className={`${classes.header} max-width`}>
            <nav className={classes.navbar}>
                <div className={classes.navWrapper}>
                    <div className={classes.logo}>
                        <Link href="/">
                            <Image src={logo} alt='logo coffeeroasters' className={classes.logoImg} />
                        </Link>
                    </div>
                    {/* Classic links */}
                    <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                        <Link href="/" className={classes.link}>Home</Link>
                        <Link href="/about" className={classes.link}>About us</Link>
                        <Link href="/subscribe" className={classes.link}>Create your plan</Link>
                    </div>

                    {/* Icon burger menu */}
                    <div ref={burger} className={`${isMobileResolution ? classes.hamburger : classes.hamburger + " display-none"}`}
                        onClick={() => {
                            toggleMenu();
                            burger.current.classList.toggle(classes.isActive);
                        }}>
                        <div className={classes.bar} />
                    </div>

                    {/* Mobile menu */}
                    <div className={`${classes.mobileNav} ${isMenuOpen ? classes.active : ""}`}>
                        <div className={classes.mobileNavWrapper}>
                            <div className={classes.logo}>
                                <Link href="/">
                                    <Image src={logo} alt='logo coffeeroasters' className={classes.logoImg} />
                                </Link>
                            </div>


                            <div className={classes.mobileLinks}>
                                <Link href="/" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Home</Link>

                                <Link href="/about" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>About us</Link>

                                <Link href="/subscribe" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Create your plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Navbar;