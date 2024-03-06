import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import GlobalContext from '@/Store/GlobalContext'
import { getLogger } from '@/Logging/log-util'
import { useRouter } from 'next/router'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import SubscribeHero from '@/Components/SubscribeHero'
import Explication from '@/Components/Explication'
import QCMContainer from '@/Components/QCMContainer'
import OrderSummary from '@/Components/OrderSummary'


export default function About() {
    /* Logger */
    const logger = getLogger('Subscribe');
    logger.debug('Subscribe page rendered');

    /* State */
    const [screenWidth, setScreenWidth] = useState();
    const [qcmList, setQcmList] = useState([{
        title: 'How do you drink your coffee?',
        folded: false,
        disabled: false,
        category: 'Preferences',
        navDisabled: false,
        currentNav: true,
        answers: [
            {
                title: 'Capsule',
                content: 'Compatible with Nespresso systems and similar brewers',
                isSelected: false
            },
            {
                title: 'Filter',
                content: 'For pour over or drip methods like Aeropress, Chemex, and V60',
                isSelected: false
            },
            {
                title: 'Espresso',
                content: 'Dense and finely ground beans for an intense, flavorful experience',
                isSelected: false
            }
        ]
    },
    {
        title: 'What type of coffee?',
        folded: true,
        disabled: false,
        category: 'Bean Type',
        navDisabled: false,
        currentNav: false,
        answers: [
            {
                title: 'Single Origin',
                content: 'Distinct, high quality coffee from a specific family-owned farm',
                isSelected: false
            },
            {
                title: 'Decaf',
                content: 'Just like regular coffee, except the caffeine has been removed',
                isSelected: false
            },
            {
                title: 'Blended',
                content: 'Combination of two or three dark roasted beans of organic coffees',
                isSelected: false
            }
        ]
    },
    {
        title: 'How much would you like?',
        folded: true,
        disabled: false,
        category: 'Quantity',
        navDisabled: false,
        currentNav: false,
        answers: [
            {
                title: '250g',
                content: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
                isSelected: false
            },
            {
                title: '500g',
                content: 'Perfect option for a couple. Yields about 40 delectable cups.',
                isSelected: false
            },
            {
                title: '1000g',
                content: 'Perfect for offices and events. Yields about 90 delightful cups.',
                isSelected: false
            }
        ]
    },
    {
        title: 'Want us to grind them?',
        folded: true,
        disabled: false,
        category: 'Grind Option',
        navDisabled: false,
        currentNav: false,
        answers: [
            {
                title: 'Wholebean',
                content: 'Best choice if you cherish the full sensory experience',
                isSelected: false
            },
            {
                title: 'Filter',
                content: 'For drip or pour-over coffee methods such as V60 or Aeropress',
                isSelected: false
            },
            {
                title: 'Cafetiere',
                content: 'Course ground beans specially suited for french press coffee',
                isSelected: false
            }
        ]
    },
    {
        title: 'How often should we deliver?',
        folded: true,
        disabled: false,
        category: 'Deliveries',
        navDisabled: false,
        currentNav: false,
        answers: [
            {
                title: 'Every week',
                content: '$14.00 per shipment. Includes free first-class shipping.',
                isSelected: false
            },
            {
                title: 'Every 2 weeks',
                content: '$17.25 per shipment. Includes free priority shipping.',
                isSelected: false
            },
            {
                title: 'Every month',
                content: '$22.50 per shipment. Includes free priority shipping.',
                isSelected: false
            }
        ]
    }]);
    const [nextQuestionToAnswerIndex, setNextQuestionToAnswerIndex] = useState(0);
    const [categorySelected, setCategorySelected] = useState('_____');
    const [beanTypeSelected, setBeanTypeSelected] = useState('_____');
    const [quantitySelected, setQuantitySelected] = useState('_____');
    const [groundingMethodSelected, setGroundingMethodSelected] = useState('_____');
    const [frequencySelected, setFrequencySelected] = useState('_____');

    /* Context */
    const { setIsMobileResolution } = useContext(GlobalContext);
    const { setIsTabletResolution } = useContext(GlobalContext);
    const { setIsDesktopResolution } = useContext(GlobalContext);
    const { tabletResolution, desktopResolution } = useContext(GlobalContext);
    const { setIsLoading } = useContext(GlobalContext);
    const { isMenuOpen } = useContext(GlobalContext);


    /* Router */
    const router = useRouter();

    /* Functions */
    const handleMenuDisplay = () => {
        setScreenWidth(window.screen.width);

        const isMobile = screenWidth < tabletResolution;
        const isTablet = screenWidth >= tabletResolution && screenWidth < desktopResolution;
        const isDesktop = screenWidth >= desktopResolution;

        setIsMobileResolution(isMobile);
        setIsTabletResolution(isTablet);
        setIsDesktopResolution(isDesktop);
    }

    const clickAnswerHandler = (questionIndex, answerIndex) => {
        // Loop over the qcmList
        const updatedQcmList = qcmList.map((qcm, idx) => {
            // If the current qcm is the one we want to update
            if (idx === questionIndex) {

                const updatedAnswers = qcm.answers.map((ans, index) => {
                    return { ...ans, isSelected: index === answerIndex };
                });

                return { ...qcm, answers: updatedAnswers, currentNav: false };

            } else if (idx === 3) {
                // Disable third question, if first answer of first question is selected
                if (questionIndex === 0 && answerIndex === 0) {
                    return { ...qcm, disabled: true, navDisabled: true, currentNav: idx === questionIndex + 1 && !qcm.disabled };
                } else if (questionIndex === 0 && answerIndex !== 0) {
                    return { ...qcm, disabled: false, navDisabled: false, currentNav: idx === questionIndex + 1 && !qcm.disabled };
                } else {
                    return { ...qcm, currentNav: idx === questionIndex + 1 && !qcm.disabled };
                }
            }

            return { ...qcm, currentNav: idx === questionIndex + 1 };

        });
        // Loop over the qcmList and set the selected category, bean type, quantity, grounding method and frequency
        updatedQcmList.forEach((qcm, idx) => {
            switch (qcm.category) {
                case 'Preferences':
                    qcm.answers.forEach((ans, index) => {
                        if (ans.isSelected) {
                            setCategorySelected(ans.title);
                        }
                    });
                    break;
                case 'Bean Type':
                    qcm.answers.forEach((ans, index) => {
                        if (ans.isSelected) {
                            setBeanTypeSelected(ans.title);
                        }
                    });
                    break;
                case 'Quantity':
                    qcm.answers.forEach((ans, index) => {
                        if (ans.isSelected) {
                            setQuantitySelected(ans.title);
                        }
                    });
                    break;
                case 'Grind Option':
                    qcm.answers.forEach((ans, index) => {
                        if (ans.isSelected) {
                            setGroundingMethodSelected(ans.title);
                        }
                    });
                    break;
                case 'Deliveries':
                    qcm.answers.forEach((ans, index) => {
                        if (ans.isSelected) {
                            setFrequencySelected(ans.title);
                        }
                    });
                    break;
            }
        });
        setQcmList(updatedQcmList);

    }

    useEffect(() => {
        // Handle menu display
        handleMenuDisplay();
        window.addEventListener('resize', handleMenuDisplay);

        // Handle loading spinner
        router.events.on("routeChangeStart", () => setIsLoading(true));
        router.events.on("routeChangeComplete", () => setIsLoading(false));

    }, [screenWidth])


    return (
        <>
            <Head>
                <title>Subscribe - CoffeeRoasters</title>
                <meta name="description" content="Create your order - CoffeeRoasters" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`overlay-burger-menu ${isMenuOpen ? 'isActive' : ''}`} />
            <div className='container'>
                <Navbar />
                <div className='content-wrapper'>
                    <SubscribeHero />
                    <Explication theme='dark' />
                    <QCMContainer qcmList={qcmList} nextQuestionToAnswerIndex={nextQuestionToAnswerIndex} onClickAnswer={clickAnswerHandler} />
                    <OrderSummary qcmList={qcmList} categorySelected={categorySelected} beanTypeSelected={beanTypeSelected} quantitySelected={quantitySelected} groundingMethodSelected={groundingMethodSelected} frequencySelected={frequencySelected} />
                    <Footer />
                </div>
            </div>


        </>
    )
}