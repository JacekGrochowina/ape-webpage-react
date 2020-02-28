import React from 'react';
import LogoSelfa from '../images/logo-selfa.svg';

const Popup = () => {
    return (
        <div className="popup">
            <div className="container popup__container row">
                <div className="popup__logo">
                    <img className="popup__image" src={LogoSelfa} alt="" />
                </div>
                <div className="popup__text row">
                    <h3 className="popup__h3">Jesteśmy partnerem handlowym firmy Selfa, polskiego producenta paneli fotowoltaicznych.</h3>
                </div>
            </div>
        </div>
    )
}

export default Popup;