import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const Fotowoltaika = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title service__title--subpage">Oferta</h1>

                <h1 className="title service__title--subpage-big">{props.data[1].title}</h1>
                <p className="service__p">Promienie słoneczne – energia elektryczna, która nic nie kosztuje!</p>
                <p className="service__p"><span className="service__span">Fotowoltaika</span>, czyli pozyskiwanie energii elektrycznej bezpośrednio z promieniowania słonecznego, jest skuteczną metodą wykorzystania niewyczerpalnych zasobów czystej energii. Panele słoneczne czerpią z tego naturalnego źródła i bardzo skutecznie pozyskują energię elektryczną. Jej produkcja odbywa się bez skażenia środowiska. Jest to w pełni ekologiczne rozwiązanie.</p>
                <p className="service__p"><span className="service__span">Baterie słoneczne</span> znacznie obniżą koszty utrzymania domu, są inwestycją przynoszącą korzyści przez kolejne dziesięciolecia. Zakup paneli słonecznych zwraca się z nawiązką. Doskonała jakość komponentów kompletnego zestawu fotowoltaicznego pozwala zachować wysoką wydajność pracy przez cały wieloletni okres eksploatacji.</p>
                <p className="service__p"><span className="service__span">Moduły fotowoltaiczne</span> w przeciwieństwie do innych źródeł dostarczają energię elektryczną przez cały rok w sposób absolutnie czysty, cichy i efektywny. Panele fotowoltaiczne nadają się zarówno do zastosowań domowych, jak i dla firm, które chcą obniżyć koszty energii elektrycznej.</p>
                <span className="service__span service__span--title">Zestawy PV pod klucz:</span>
                <ul className="service__list">
                    <li className="service__item">Falowniki 1 oraz 3 fazowe</li>
                    <li className="service__item">Panele mono i poli-krystaliczne</li>
                    <li className="service__item">Pełen osprzęt montażowy</li>
                    <li className="service__item">Profesjonalna ekipa monterów</li>
                </ul>
                <p className="service__p">Oferujemy rozwiązania dopasowane do potrzeb i możliwości klienta z maksymalnym uzyskiem energii elektrycznej [kWh]. Przygotowujemy profesjonalnie – Projekt Koncepcyjny z precyzyjnie wyliczonym kosztem instalacji oraz jej zyskownością. Projektujemy małe i mikro instalacje PV jak i duże farmy PV > 1MWp. Udzielamy pomocy w wyszukiwaniu i organizacji dofinansowania ze Środków Unijnych lub dopasowaniu systemu finansowania z BOŚ i NFOŚ jak również w finalizacji wszelkich spraw administracyjno-prawnych z OSD.</p>
                <p className="service__p"><span className="service__span">OFERTA SZYTA NA MIARĘ</span></p>
                <p className="service__p">Tylko właściwe dobranie odpowiednich części składowych profesjonalnego zestawu daje gwarancję niezawodności instalacji PV nawet przez 30 lat. Dzięki współpracy z najlepszymi producentami paneli PV oraz falowników proponujemy Państwu sprawdzone i niezawodne systemy, stosowane od wielu lat na całym świecie.</p>
                <p className="service__p"><span className="service__span">GWARANCJE I CERTYFIKATY</span></p>
                <p className="service__p">Wykonane przez nas instalacje objęte są gwarancjami na montaż oraz wszelkimi gwarancjami producenta dla elementów składowych.</p>
            </div>
        </div>
    )
}

export default Fotowoltaika;