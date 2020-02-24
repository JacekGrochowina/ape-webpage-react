import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const DetekcjaGazu = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[4].title}</h1>

                <p className="service__p">Wykonujemy kompletne systemy detekcji gazów wybuchowych przeznaczone do podniesienia bezpieczeństwa eksploatacji urządzeń gazowniczych.</p>

                <p className="service__p">Systemy te znajdują zastosowanie w instalacjach zasilanych gazem ziemnym, propanem, butanem oraz gazami toksycznymi, w tym tlenkiem węgla.</p>

                <p className="service__p">Zintegrowane systemy zabezpieczeń gazowych wykorzystują urządzenia wykonane w technice mikroprocesorowej. Umożliwia to podłączenie w jednej linii szeregowo do ośmiu dowolnych urządzeń systemu do jednego przewodu komunikacyjnego. Ma to szczególne znaczenie w przypadku systemów rozbudowanych, przynosząc duże oszczędności czasu, materiałów i kosztów montażu w porównaniu z innymi „standardowymi” systemami.</p>

                <span className="service__span service__span--title">W skład systemu wchodzą:</span>

                <ul className="service__list">
                    <li className="service__item">centrala</li>
                    <li className="service__item">detektory</li>
                    <li className="service__item">sterowniki zaworów</li>
                    <li className="service__item">zawory odcinające</li>
                    <li className="service__item">sterowniki uniwersalne</li>
                    <li className="service__item">sygnalizatory optyczno-akustyczne</li>
                </ul>

                <p className="service__p">Tak skonstruowany system detekcji reaguje automatycznie i natychmiastowo w przypadku pojawienia się wycieku gazu, powodując odcięcie dopływu gazu do instalacji i jednocześnie przesyłając sygnał o zaistniałej awarii do użytkownika oraz nadzoru. Dodatkowo sygnalizacja optyczno-akustyczna informuje użytkowników i inne osoby o zagrożeniu.</p>

                <span className="service__span service__span--title">Zastosowanie systemów detekcji gazów:</span>

                <ul className="service__list">
                    <li className="service__item">hale przemysłowe i magazyny</li>
                    <li className="service__item">kotłownie gazowe</li>
                    <li className="service__item">budynki użyteczności publicznej</li>
                    <li className="service__item">pomieszczenia mieszkalne wyposażone w ogrzewanie gazowe i CO</li>
                </ul>

            </div>
        </div>
    )
}

export default DetekcjaGazu;