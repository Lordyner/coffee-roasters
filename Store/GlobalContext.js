import React, { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState();

    const [isMobileResolution, setIsMobileResolution] = useState();
    const [isTabletResolution, setIsTabletResolution] = useState();
    const [isDesktopResolution, setIsDesktopResolution] = useState();

    const [showPopupConfirmation, setShowPopupConfirmation] = useState();
    const [showPopupError, setShowPopupError] = useState();
    const [showPopupContactFormIncorrect, setShowPopupContactFormIncorrect] = useState();

    const [isMonthly, setIsMonthly] = useState(true);
    const [animatePrice, setAnimatePrice] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("_____");
    const [selectedBeanType, setSelectedBeanType] = useState("_____");
    const [selectedQuantity, setSelectedQuantity] = useState("_____");
    const [selectedGroundingMethod, setSelectedGroundingMethod] = useState("_____");
    const [selectedFrequency, setSelectedFrequency] = useState("_____");

    const [orderSummaryTemplateA, setOrderSummaryTemplateA] = useState(`“I drink my coffee using ${selectedCategory}, with a ${selectedBeanType} type of bean. ${selectedQuantity}, send to me ${selectedFrequency}`);
    const [orderSummaryTemplateB, setOrderSummaryTemplateB] = useState(`“I drink my coffee as ${selectedCategory}, with a ${selectedBeanType} type of bean. ${selectedQuantity}, groud ala ${selectedGroundingMethod}, send to me ${selectedFrequency}`);


    const [mobileResolution] = useState(320);
    const [tabletResolution] = useState(768);
    const [desktopResolution] = useState(1440);

    const modalRef = React.useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        handleBodyScroll(!isMenuOpen);
    }
    const handleBodyScroll = (lockScroll) => {
        const body = document.body;
        if (lockScroll) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    };

    return (
        <GlobalContext.Provider value={{
            isLoading, setIsLoading,
            isMobileResolution, setIsMobileResolution,
            isTabletResolution, setIsTabletResolution,
            isDesktopResolution, setIsDesktopResolution,
            showPopupConfirmation, setShowPopupConfirmation,
            showPopupError, setShowPopupError,
            isMenuOpen, setIsMenuOpen,
            showPopupContactFormIncorrect, setShowPopupContactFormIncorrect,
            mobileResolution, tabletResolution, desktopResolution,
            toggleMenu,
            isMonthly, setIsMonthly,
            animatePrice, setAnimatePrice,
            orderSummaryTemplateA, setOrderSummaryTemplateA,
            orderSummaryTemplateB, setOrderSummaryTemplateB,
            selectedCategory, setSelectedCategory,
            selectedBeanType, setSelectedBeanType,
            selectedQuantity, setSelectedQuantity,
            selectedGroundingMethod, setSelectedGroundingMethod,
            selectedFrequency, setSelectedFrequency,
            modalRef

        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalContext;