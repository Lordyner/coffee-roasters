import React, { useContext, useRef } from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css'
import GlobalContext from '@/Store/GlobalContext';
import Link from 'next/link';
import logo from '@/public/images/shared/desktop/logo.svg';


const Navbar = () => {
    const burger = useRef();
    const { isMobileResolution } = useContext(GlobalContext);

    const { isMenuOpen } = useContext(GlobalContext);
    const { toggleMenu } = useContext(GlobalContext);



    return (
        <header className={`${classes.header}`}>
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
                        <Link href="/" className={classes.link}>About us</Link>
                        <Link href="/" className={classes.link}>Create your plan</Link>
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
                            {/* Classic links */}
                            <div className={`${isMobileResolution ? "display-none" : classes.navLink}`}>
                                <Link href="/" className={classes.link}>Home</Link>
                                <Link href="/" className={classes.link}>About us</Link>
                                <Link href="/" className={classes.link}>Create your plan</Link>
                            </div>


                            <div className={classes.mobileLinks}>
                                <Link href="/stories" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Home</Link>

                                <Link href="/features" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>About us</Link>

                                <Link href="/pricing" className={classes.mobileLink} onClick={() => {
                                    toggleMenu();
                                    burger.current.classList.toggle(classes.isActive);
                                }}>Create your plan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;