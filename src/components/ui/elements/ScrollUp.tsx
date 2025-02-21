import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { SoArrowUp } from 'solom-icon';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-[9999999999] bottom-4 right-4 gradientBg text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                    <SoArrowUp className='w-5 h-5'/>
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
