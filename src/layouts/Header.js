import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="row">
                    <a className="header__link" href="tel:603915306">
                        <FontAwesomeIcon icon={['fas', 'mobile-alt']} />
                        <span>+48 603 915 306</span>
                    </a>
                    <a className="header__link" href="mailto:apepwape@gmail.com">
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                        <span>apepwape@gmail.com</span>
                    </a>
                    <a className="header__link" href="https://www.google.com/maps/dir//Sk%C5%82adowa+3,+87-810+W%C5%82oc%C5%82awek/@52.65502,19.0838714,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471c9bd7863642c7:0x7c8373b38a0ac564!2m2!1d19.0860601!2d52.65502" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                        <span>Włocławek</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;