import React from 'react';
import SwiperMain from '../components/SwiperMain';
import Button from '../components/Button';

/* Images to Swiper */
import Bg1 from '../images/slider/1.jpg';
import Bg2 from '../images/slider/2.jpg';
import Bg3 from '../images/slider/3.jpg';
import Bg4 from '../images/slider/4.jpg';
import Bg5 from '../images/slider/5.jpg';
import Bg6 from '../images/slider/6.jpg';
import Bg7 from '../images/slider/7.jpg';
import Bg8 from '../images/slider/8.jpg';
import Bg9 from '../images/slider/9.jpg';

const HomePage = () => {

    /* Data of Swiper */
    const swiperData = [
        {
            id: 1,
            title: "Automatyka przemysłowa",
            bg: Bg1,
            link: "/",
        },
        {
            id: 2,
            title: "Instalacje fotowoltaiczne",
            bg: Bg2,
            link: "/",
        },
        {
            id: 3,
            title: "Elektryczne systemy grzewcze",
            bg: Bg3,
            link: "/",
        },
        {
            id: 4,
            title: "Termowizja",
            bg: Bg4,
            link: "/",
        },
        {
            id: 5,
            title: "Detekcja gazu",
            bg: Bg5,
            link: "/",
        },
        {
            id: 6,
            title: "Drzwi automatyczne",
            bg: Bg6,
            link: "/",
        },
        {
            id: 7,
            title: "Instalacje alarmowe - monitoring",
            bg: Bg7,
            link: "/",
        },
        {
            id: 8,
            title: "Ocena maszyn - wymagania minimalne BHP",
            bg: Bg8,
            link: "/",
        },
        {
            id: 9,
            title: "Strony internetowe",
            bg: Bg9,
            link: "/",
        },
    ]

    /*  */

    return (
        <div className="home">
            <SwiperMain data={swiperData} />

            <section>
                <div className="container home__container home__container--about">

                    <p className="home__p"><strong>Firma APE</strong> to dynamicznie rozwijające się przedsiębiorstwo oferujące <strong>szeroki wachlarz usług</strong> serwisowych i instalacyjnych.
Podstawowy zakres naszych działań to wszelkiego rodzaju prace związane z szeroko pojętą automatyką, automatyzacją linii produkcyjnych, ciągów technologicznych, maszyn i urządzeń, instalacji grzewczych, instalacji chłodu technologicznego, wentylacji, detekcji gazu itp.</p>
                    <Button link="/oferta" text="zobacz ofertę" />

                </div>
            </section>

        </div>
    )
}

export default HomePage;