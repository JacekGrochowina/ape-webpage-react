import React from 'react';
import ReturnBtn from '../../components/ReturnBtn';

const SystemyGrzewcze = (props) => {
    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>

                <h1 className="title projects__title--subpage-big">{props.data[2].title}</h1>

                <p className="service__p">Często mylona z tradycyjnymi matami grzewczymi gdzie elementem grzejnym jest kabel osadzony na macie, która ułatwia montaż pod powierzchnią ceramiczną, takie maty również posiadamy w swojej ofercie jednak zdecydowanie nie nadają się jako element grzewczy pod panele podłogowe.</p>

                <p className="service__p">Caleo to nowoczesny, wysokowydajny materiał grzewczy w wykorzystaniem nanotechnologii.</p>

                <iframe title="systemy grzewcze caleo" className="video" style={{ width: "100%", height: "400px", display: "block" }} src="https://www.youtube.com/embed/lMKoqQeV0-0" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

                <p className="service__p">Folię Caleo produkuje <span className="service__span">jeden z największych producentów</span> tego typu systemów na świecie, firma Dymsco z Korei Południowej.</p>

                <p className="service__p">Dostosowanie parametrów folii do wymogów europejskich gwarantuje zarówno nam jak i Państwu niezawodność systemu oraz bezpieczeństwo użytkowania.</p>

                <p className="service__p">Całkowita grubość folii to jedynie 0,388mm co <span className="service__span">w żaden sposób nie wpływa na wysokośc podłogi</span> i dzięki temu może być zastosowana nawet do istniejących już podłóg (można zdemontować panele podłogowe, zainstalować folię grzewczą Caleo i położyć ponownie te same panele i juz po 2h cieszyć się ciepłą podłogą).</p>

                <p className="service__p">System składa się z innowacyjnej węglowej folii grzewczej CALEO CA 80-130 oraz termostatów, które <span className="service__span">można sterować przez internet</span>.</p>

                <p className="service__p"><span className="service__span">System CALEO REG.</span> – system bezpośredniego montażu pod panele lub deski podłogowe daje unikalne możliwości dla nowoczesnego budownictwa. Dzięki zastosowaniu tego produktu, można uzyskać zarówno całkowity system ogrzewania domów, jak również podnieść komfort tylko poszczególnych pomieszczeń, poprzez zamontowanie ogrzewania podłogi w strefach zabaw dla dzieci, czy spożywania .</p>

                <p className="service__p"><span className="service__span">CALEO EFFICIENT</span> – system akumulacyjnego ogrzewania podłogowego jest idealnym wyborem dla zwykłych i energooszczędnych budynków. Folia grzewcza umieszczona pod 4-6cm warstwą wylewki ogrzewa ją w porach, gdy prąd jest o połowę tańszy (noc oraz wczesne popołudnie), a następnie podłoga oddaje ciepło do pomieszczeń przez kilka godzin po wyłączeniu ogrzewania.</p>

                <p className="service__p"><span className="service__span">CALEO DIRECT</span> – ogrzewanie sufitowe. Pewną niedogodnością ogrzewania podłogowego jest to, że temperatura powierzchni nie może przekraczać 29-31°C ze względów zdrowotnych, a w przypadku podłóg drewnianych i paneli nie może przekraczać 27-28°C ze względu na potencjalne uszkodzenia materiałów podłogowych. To znaczy, że przekazywanie ciepła do pomieszczeń z podłogi jest również ograniczone. Poprzez zastosowanie ogrzewania sufitowego, nie tylko uzyskujemy wyższe temperatury otoczenia, ale również swobodniej możemy aranżować nasze wnętrza.</p>

                <p className="service__p">Rodzina folii grzewczych CALEO, będąca <span className="service__span">liderem rynku folii grzewczych</span>. Posiada wszelkie niezbędne atesty wymagane w UE, które są świadectwem wyjątkowej efektywności i bezpieczeństwa.</p>

                <p className="service__p">Więcej informacji na stronie <a href="http://www.wloclawek.caleo.pl/" target="_blank" rel="noopener noreferrer" className="service__span">wloclawek.caleo.pl</a></p>

            </div>
        </div>
    )
}

export default SystemyGrzewcze;