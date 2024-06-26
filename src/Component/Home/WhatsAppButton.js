import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './whatsappbutton.css';

const WhatsAppButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1500) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/6366829999', '_blank'); // Replace with your WhatsApp link
    };

    return (
        <>
            {showScrollButton && (
                <div className={`top-button rounded-circle bounce-in-top-top`} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faChevronUp} className="fs-4" />
                </div>
            )}

            <div className="whatsapp-button rounded-circle btn  bounce-in-top-whatsapp" data-bs-toggle="tooltip" title='Chat with us' onClick={handleWhatsAppClick}>
                <FontAwesomeIcon className='heartbeat' icon={faWhatsapp} size="2x" />
            </div>
        </>
    );
};

export default WhatsAppButton;