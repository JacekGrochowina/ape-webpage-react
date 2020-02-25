import React from 'react';
import { Link } from 'react-router-dom';
import SwiperMain from '../components/SwiperMain';
import Button from '../components/Button';
import Parallax from '../components/Paralax';

/* Image to parallax */
import Image from '../images/parallax/fotowoltaika.jpg';

/* Icons of services */
import Icon1 from '../images/services/icon1.png';
import Icon2 from '../images/services/icon2.png';
import Icon3 from '../images/services/icon3.png';
import Icon4 from '../images/services/icon4.png';
import Icon5 from '../images/services/icon5.png';
import Icon6 from '../images/services/icon6.png';
import Icon7 from '../images/services/icon7.png';

const HomePage = (props) => {

    /* Data of icons */
    const servicesIconsData = [
        {
            id: 1,
            title: "drzwi automatyczne",
            icon: Icon1,
            link: "/drzwi-automatyczne"
        },
        {
            id: 2,
            title: "termowizja instalacji",
            icon: Icon2,
            link: "/termowizja"
        },
        {
            id: 3,
            title: "instalacje alarmowe",
            icon: Icon3,
            link: "/instalacje-alarmowe"
        },
        {
            id: 4,
            title: "monitoring obiektów",
            icon: Icon4,
            link: "/instalacje-alarmowe"
        },
        {
            id: 5,
            title: "dyrektywy WE",
            icon: Icon5,
            link: "/ocena-maszyn"
        },
        {
            id: 6,
            title: "ocena ryzyka",
            icon: Icon6,
            link: "/ocena-maszyn"
        },
        {
            id: 7,
            title: "tworzenie stron",
            icon: Icon7,
            link: "/tworzenie-stron"
        },
    ]

    const servicesIcons = servicesIconsData.map(item => (
        <Link to={item.link} className="home__service" key={item.id}>
            <img className="home__service-icon" src={item.icon} alt={item.title} />
            <h3 className="home__service-icon-title">{item.title}</h3>
        </Link>
    ))

    return (
        <div className="home">
            {/* props from Page.js > SERVICES_DATA array */}
            <SwiperMain data={props.data} />

            <section>
                <div className="container home__container home__container--about">

                    <p className="home__p"><strong>Firma APE</strong> to dynamicznie rozwijające się przedsiębiorstwo oferujące <strong>szeroki wachlarz usług</strong> serwisowych i instalacyjnych.
Podstawowy zakres naszych działań to wszelkiego rodzaju prace związane z szeroko pojętą automatyką, automatyzacją linii produkcyjnych, ciągów technologicznych, maszyn i urządzeń, instalacji grzewczych, instalacji chłodu technologicznego, wentylacji, detekcji gazu itp.</p>
                    <Button link="/oferta" text="zobacz ofertę" />

                </div>
            </section>

            <section>
                <div className="container home__container home__container--services row">
                    {servicesIcons}
                </div>
            </section>

            <Parallax src={Image} alt="solar panels" />

            <section className="info row">
                <div className="info__tile col-6 col-12-sm" style={{ backgroundImage: `url(${props.data[1].bg})` }}></div>
                <div className="info__tile col-6 col-12-sm" style={{ backgroundImage: `url(${props.data[2].bg})` }}></div>

                <div className="wraper info__wraper">
                    <h1 className="info__h1">Fotowoltaika + Maty Grzewcze = <span className="info__h1--span">Darmowe Ogrzewanie?</span></h1>
                    <a className="button" href="http://kalkulator.apepw.pl/" >zobacz ofertę</a>
                </div>
            </section>
        </div>
    )
}

export default HomePage;