import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from '../components/GoogleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="container footer__container">
                <div className="footer__wraper">
                    <h1 className="header footer__header">Bądźmy w kontakcie</h1>
                    <div className="row">
                        <div className="col-6 col-12-sm">
                            <h2 className="footer__h2">APE Piotr Wysocki</h2>
                            <ul className="footer__list">
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></div>ul. Wyszyńskiego 19 / 3</li>
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'map-marked-alt']} /></div> 87-800 Włocławek</li>
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'envelope']} /></div>apepwape@gmail.com</li>
                                <li className="footer__item"><Link to="/"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'clock']} /></div>Po godzinach...</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-12-sm">
                            <h2 className="footer__h2">Warsztat - obsługa klienta</h2>
                            <ul className="footer__list">
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /></div>ul. Składowa 3</li>
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'map-marked-alt']} /></div>87-800 Włocławek</li>
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'mobile-alt']} /></div>+48 603 915 306</li>
                                <li className="footer__item"><div className="footer__icon"><FontAwesomeIcon icon={['fas', 'dollar-sign']} /></div>mBank 52114020040000310250449110</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map footer__map">
                <GoogleMap />
            </div>
            <footer>
                <div className="container">
                    <p className="footer__p">APE Piotr Wysocki &copy; 2020 All rights reserved</p>
                    <Link to="/rodo" className="footer__p footer__p--link">Polityka RODO</Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer;