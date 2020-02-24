import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const Automatyka = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title service__title--subpage">Oferta</h1>

                <h1 className="title service__title--subpage-big">{props.data[0].title}</h1>
                <p className="service__p">Oferujemy szeroki pakiet usług w dziedzinie automatyki przemysłowej. Specjalizujemy się w automatyzacji procesów technologicznych, instalacjach chłodu technologicznego jak również w utrzymywaniu ruchu w zakładach produkcyjnych. W zakresie naszych usług jest doradztwo techniczne, planowanie, wykonawstwo i serwis.</p>
                <ul className="service__list">
                    <li className="service__item">konserwacje linii technologicznych</li>
                    <li className="service__item">naprawa uszkodzonej automatyki i mechaniki maszyn</li>
                    <li className="service__item">projekty i wykonanie szaf rozdzielczych, instalacji elektrycznych i AKPiA</li>
                    <li className="service__item">programowanie sterowników PLC</li>
                    <li className="service__item">programowanie systemów wizualizacji i paneli operatorskich</li>
                    <li className="service__item">wdrażanie nowoczesnych rozwiązań sterowania i nadzoru</li>
                    <li className="service__item">montaż urządzeń na obiekcie</li>
                    <li className="service__item">serwis gwarancyjny i pogwarancyjny systemów automatyki przemysłowej</li>
                    <li className="service__item">przystosowanie maszyn do wymagań minimalnych</li>
                    <li className="service__item">szacowanie ryzyka</li>
                </ul>

            </div>
        </div>
    )
}

export default Automatyka;