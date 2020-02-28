import React from 'react';
import LogoSelfa from '../images/logo-selfa.svg';
// import { Link } from 'react-router-dom';

const Popup = () => {
    return (
        <div className="popup">
            <div className="container popup__container row">
                <a href="http://www.selfa-pv.com/moduly-fotowoltaiczne" target="_blank" rel="noopener noreferrer" className="popup__logo">
                    <img className="popup__image" src={LogoSelfa} alt="" />
                </a>
                <div className="popup__text row">
                    <h3 className="popup__h3">Jesteśmy partnerem handlowym firmy Selfa, polskiego producenta paneli fotowoltaicznych.</h3>
                </div>
            </div>
        </div>
    )
}

export default Popup;