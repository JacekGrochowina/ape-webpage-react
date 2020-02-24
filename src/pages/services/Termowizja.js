import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const Termowizja = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[3].title}</h1>

                <p className="service__p"><span className="service__span">Celem pomiarów termowizyjnych jest identyfikacja i udokumentowanie występujących anomalii temperaturowych.</span></p>

                <p className="service__p">Diagnostyka termowizyjna pozwala na wykrywanie i lokalizowanie różnego typu wad i usterek. W budownictwie umożliwia badanie jakości oferowanych materiałów budowlanych, stolarki okiennej i drzwiowej oraz kontrolę stanu izolacji cieplnej budynków i lokalizacji nieszczelności, co znacząco wpływa na ograniczenie zużycia energii grzewczej.</p>

                <p className="service__p">Termowizja daje również możliwości zlokalizowania źródeł wycieków z instalacji centralnego ogrzewania oraz ciepłej i zimnej wody.</p>

                <p className="service__p">Dzięki termowizji można określić stan różnych elementów rozdzielni elektrycznych średniego i niskiego napięcia oraz wykryć wadliwe styki i połączenia.</p>

                <p className="service__p">Korzystając z termowizji, przeprowadza się badanie stanu technicznego urządzeń mechanicznych i elektroenergetycznych bez uciążliwego i kosztownego ich wyłączania.</p>

                <p className="service__p">Diagnostyka termowizyjna w przemyśle pozwala zapobiec awariom i określić zakres remontu, służy podnoszeniu wydajności oraz zmniejszaniu energochłonności.</p>

                <span className="service__span service__span--title">W ramach badań termowizyjnych oferujemy:</span>

                <ul className="service__list">
                    <li className="service__item">ocenę stanu izolacji termicznej budynku i lokalizowanie nieszczelności,</li>
                    <li className="service__item">ocenę szczelności stolarki budowlanej i wykrywanie miejsc strat ciepła,</li>
                    <li className="service__item">wykrywanie mostków termicznych w przegrodach budowlanych,</li>
                    <li className="service__item">lokalizowanie zawilgoceń i wycieków w przegrodach,</li>
                    <li className="service__item">wykrywanie i ocenę zagrożenia zagrzybieniem w przegrodach,</li>
                    <li className="service__item">wykrywanie niepożądanej infiltracji zimnego powietrza przez przegrody,</li>
                    <li className="service__item">wykrywanie wad zastosowanych materiałów budowlanych,</li>
                    <li className="service__item">inspekcje przed remontowe oraz kontrola wykonanych napraw i ocieplenia,</li>
                    <li className="service__item">badanie izolacji ścian chłodni przemysłowych,</li>
                    <li className="service__item">ustalanie przebiegu i wykrywanie usterek ogrzewania podłogowego,</li>
                    <li className="service__item">wykrywanie niedrożności w instalacjach grzewczych,</li>
                    <li className="service__item">diagnostykę urządzeń klimatyzacyjnych,</li>
                    <li className="service__item">wykrywanie usterek instalacji elektrycznych,</li>
                    <li className="service__item">pomiary termowizyjne urządzeń elektrycznych (stacje transformatorowe, rozdzielnie, szafy zasilające i sterownicze, …),</li>
                    <li className="service__item">pomiary termowizyjne maszyn i urządzeń,</li>
                    <li className="service__item">pomiary termowizyjne urządzeń energetycznych (np. izolacja cieplna kotłów wodnych i sieci ciepła, …)</li>
                </ul>

                <span className="service__span service__span--title">Szacunkowy cennik usług:</span>

                <table className="service__table">
                    <tr className="service__row">
                        <td className="service__cell">Zdjęcie termowizyjne minimalna liczba zdjęć – 10 szt.</td>
                        <td className="service__cell--price">7 zł</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Zdjęcie termowizyjne z raportem minimalna liczba zdjęć – 10 szt.</td>
                        <td className="service__cell--price">10 zł</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Badanie termowizyjne mieszkania do 100 m2 (do 25 termogramów)</td>
                        <td className="service__cell--price">150 zł</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Badanie termowizyjne domków jednorodzinnych do 250 m2 (do 50 termogramów)</td>
                        <td className="service__cell--price">250 zł</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Badanie termowizyjne większych obiektów, obiektów nietypowych wg cennika za termogram z rabatem w zależności od stopnia złożoności badania i liczby termogramów.</td>
                        <td className="service__cell--price">do negocjacji</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Badanie maszyn, urządzeń, instalacji ogrzewania, chłodzenia, elektrycznych itp.</td>
                        <td className="service__cell--price">ok. 75 zł (obiekt)</td>
                    </tr>
                    <tr className="service__row">
                        <td className="service__cell">Badanie budynków przemysłowych</td>
                        <td className="service__cell--price">ok. 400 zł (obiekt)</td>
                    </tr>
                </table>

                <p className="service__p">W ramach usługi z raportem klient otrzymuje drogą e-mailową zapisy wykonanych termogramów wraz z analizą termiczną w formie kolorowych zdjęć w formacie jpg.</p>

                <p className="service__p">Na życzenie dostarczamy raporty w formie wydruków w kolorze na papierze A4 w cenie 3 zł za stronę.</p>

                <p className="service__p"><span className="service__span">Podane ceny są cenami orientacyjnymi, mają charakter wyłącznie informacyjny i nie stanowią oferty w rozumieniu kodeksu cywilnego.</span></p>

            </div>
        </div>
    )
}

export default Termowizja;