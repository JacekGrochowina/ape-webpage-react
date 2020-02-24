import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const TworzenieStron = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[8].title}</h1>

                <p className="service__p"><span className="service__span">Decydując się na nasze usługi, zyskujesz w pełni funkcjonalną, responsywną i zgodną z najnowszymi standardami stronę www.</span></p>

                <ul className="service__list">
                    <li className="service__item">Całkowicie funkcjonalna strona internetowa</li>
                    <li className="service__item">Strona przyjazna przeglądaniu mobilnemu</li>
                    <li className="service__item">Estetyczny i funkcjonalny design strony WWW</li>
                    <li className="service__item">Jednorazowa opłata za wykonanie strony www</li>
                </ul>

                <p className="service__p">Więcej informacji na <a href="http://www.webdesign.apepw.pl/" target="_blank" rel="noopener noreferrer" className="service__span">webdesign.apepw.pl</a></p>

            </div>
        </div>
    )
}

export default TworzenieStron;