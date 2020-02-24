import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const InstalacjeAlarmowe = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[6].title}</h1>

                <p className="service__p">Oferujemy usługi w zakresie instalacji alarmowej i monitoringu wizyjnego. Instalujemy zarówno małe jak również rozbudowane systemy monitoringu na potrzeby indywidualnych klientów oraz małych i dużych firm.</p>

                <span className="service__span service__span--title">Prawidłowo wykonana instalacja monitoringu może przynieść wiele korzyści:</span>

                <ul className="service__list">
                    <li className="service__item">ogólne podniesienie bezpieczeństwa osób i mienia</li>
                    <li className="service__item">ograniczenie liczby kradzieży</li>
                    <li className="service__item">podniesienie wydajności pracy</li>
                    <li className="service__item">może stać się elementem systemu rejestracji czasu pracy</li>
                </ul>

                <span className="service__span service__span--title">Nowoczesny system telewizji przemysłowej pozwala na:</span>

                <ul className="service__list">
                    <li className="service__item">podgląd obrazu przez internet</li>
                    <li className="service__item">rejestrację obrazu w wysokiej jakości nawet w trudnych warunkach oświetleniowych</li>
                    <li className="service__item">wygodne przeglądanie zapisanego materiału z uwzględnieniem wybranych kamer, czasu oraz zdarzeń</li>
                </ul>

            </div>
        </div>
    )
}

export default InstalacjeAlarmowe;