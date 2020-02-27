import React from 'react';
import { Link } from 'react-router-dom';
import SwiperMain from '../components/SwiperMain';
import Button from '../components/Button';
import Parallax from '../components/Paralax';

/* Image to parallax */
import Image from '../images/parallax/fotowoltaika.jpg';

const HomePage = (props) => {

    const servicesIcons = props.data.map(item => (
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