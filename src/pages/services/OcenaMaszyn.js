import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const OcenaMaszyn = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[7].title}</h1>

                <span className="service__span service__span--title">Świadczymy usługi w zakresie:</span>

                <ul className="service__list">
                    <li className="service__item">Oceny bezpieczeństwa maszyn i urządzeń w zakresie minimalnych wymagań BHP zgodnie z rozporządzeniem Ministra Gospodarki z dnia 30 października 2002 r. w sprawie minimalnych wymagań dotyczących bezpieczeństwa i higieny pracy w zakresie użytkowania maszyn przez pracowników podczas pracy (Dz. U. Nr 191, poz. 1596 z późniejszymi zmianami), wdrażającym do prawa Polskiego dyrektywę 2009/104/WE.</li>
                    <li className="service__item">Doradztwa w zakresie wymagań zasadniczych CE – Przeprowadzanie procesu oceny zgodności dla nowych maszyn, przygotowywanie deklaracji zgodności WE zgodnie z rozporządzeniem Ministra Gospodarki z dnia 21 października 2008 r. w sprawie zasadniczych wymagań dla maszyn (Dz. U. Nr 199, poz. 1228 z późniejszymi zmianami), wdrażającym do prawa Polskiego dyrektywę 2006/42/WE.</li>
                </ul>

                <p className="service__p">Maszyny wyprodukowane lub wprowadzone na polski rynek przez dniem 1 stycznia 2003 r. powinny spełniać minimalne wymagania w zakresie bezpieczeństwa. Termin dostosowania takich maszyn do wymagań minimalnych upłynął 1 stycznia 2006 r., jednak w wielu przedsiębiorstwach nadal użytkowane są maszyny i urządzenia, które nie spełniają podstawowych wymagań bezpieczeństwa pracy. Jeśli taka sytuacja ma miejsce w Twojej Firmie – powinieneś doprowadzić park maszyn do stanu zgodnego z obowiązującymi przepisami i zapewnić pracownikom bezpieczne warunki pracy.</p>

                <p className="service__p">Obowiązek spełniania przez maszyny co najmniej wymagań minimalnych wynika z dyrektywy 2009/104/WE, nazywanej dyrektywą „narzędziową”, która została wprowadzone do polskiego systemu prawnego w rozporządzeniu Ministra Gospodarki z 30 października 2002 r. w sprawie minimalnych wymagań dotyczących bezpieczeństwa i higieny pracy w zakresie użytkowania maszyn przez pracowników podczas pracy (Dz. U. z 2002 r. Nr 191, poz. 1596, zm. Dz. U. z 2003 r. Nr 178, poz. 1745).</p>

                <p className="service__p">Maszyny nowe wprowadzone po raz pierwszy na rynek już po wejściu Polski do Unii Europejskiej muszą spełniać wymagania zasadnicze.</p>

            </div>
        </div>
    )
}

export default OcenaMaszyn;