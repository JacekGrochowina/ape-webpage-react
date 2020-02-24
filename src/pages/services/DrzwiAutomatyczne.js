import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const DrzwiAutomatyczne = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[5].title}</h1>

                <p className="service__p"><span className="service__span">Nasz wykwalifikowany zespół techników zajmuje się kompleksowym serwisem drzwi automatycznych.</span></p>

                <span className="service__span service__span--title">Wykonujemy:</span>

                <ul className="service__list">
                    <li className="service__item">naprawy gwarancyjne i pogwarancyjne</li>
                    <li className="service__item">przeglądy konserwacyjne i okresowe</li>
                    <li className="service__item">wymianę wyeksploatowanych elementów na nowe</li>
                    <li className="service__item">dostawę i montaż kompletnych napędów drzwi automatycznych</li>
                </ul>

                <p className="service__p">Elementy mechaniczne drzwi automatycznych jak również ich system sterowania należy poddawać okresowej kontroli poprawności ich działania. Regularny serwis i konserwacja systemów automatycznych są niezbędne dla długiego i niezawodnego funkcjonowania urządzeń oraz zapewnienia bezpieczeństwa. W celu wydłużenia żywotności drzwi automatycznych przeglądy konserwacyjne należy wykonywać, co 3-4 miesiące, w zależności od natężenia ruchu w obiekcie.</p>

                <p className="service__p"><span className="service__span">Umowa serwisowa na automatykę drzwiową gwarantuje bezpieczeństwo i niezawodną pracę drzwi oraz szybką reakcję serwisu na nieprawidłowości w działaniu urządzeń. </span></p>

            </div>
        </div>
    )
}

export default DrzwiAutomatyczne;