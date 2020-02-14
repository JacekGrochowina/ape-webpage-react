import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

/* Backgrounds of Services */
import Bg1 from '../images/slider/1.jpg';
import Bg2 from '../images/slider/2.jpg';
import Bg3 from '../images/slider/3.jpg';
import Bg4 from '../images/slider/4.jpg';
import Bg5 from '../images/slider/5.jpg';
import Bg6 from '../images/slider/6.jpg';
import Bg7 from '../images/slider/7.jpg';
import Bg8 from '../images/slider/8.jpg';
import Bg9 from '../images/slider/9.jpg';

/* Thumbnails of Portfolio */
import Thb from '../images/portfolio/thumbnail/none-img.jpg';
// import Thb1 from '../images/portfolio/thumbnail/';
// import Thb2 from '../images/portfolio/thumbnail/';
// import Thb3 from '../images/portfolio/thumbnail/';
// import Thb4 from '../images/portfolio/thumbnail/';
// import Thb5 from '../images/portfolio/thumbnail/';
// import Thb6 from '../images/portfolio/thumbnail/';
// import Thb7 from '../images/portfolio/thumbnail/';
// import Thb8 from '../images/portfolio/thumbnail/';
// import Thb9 from '../images/portfolio/thumbnail/';

const Page = () => {

    const SERVICES_DATA = [
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
            title: "Ocena maszyn - wymagania BHP",
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

    const PORTFOLIO_DATA = [
        {
            id: 1,
            title: "Dispersions&Resins",
            desc: "Instalacja automatyki i sterowania procesu produkcyjnego - grzanie/chłodzenie oraz podawania surowców do reaktorów żywic syntetycznych w Dispersions&Resins we Włocławku",
            place: "Włocławek",
            data: 2019,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 2,
            title: "Superfos",
            desc: "Instalacja chłodzenia hali produkcyjnej, automatyka sterowania produkcji chłodu z agregatów wody lodowej i drycoolerów",
            place: "Lubień Kujawski",
            data: 2018,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 3,
            title: "Dispersions&Resins",
            desc: "Instalacja automatyki i sterowania – grzanie/chłodzenie wsadu reaktora do produkcji żywic syntetycznych",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 4,
            title: "Kongsberg",
            desc: "Instalacja automatyki i sterowania urządzeń grzewczo-wentylacyjnych i detekcji gazu",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 5,
            title: "Bombardier",
            desc: "Instalacje elektryczne zasilania i sterowania urządzeniami grzewczo-wentylacyjnymi oraz instalacja detekcji gazu (acetylen, metan)",
            place: "Wrocław",
            data: 2016,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 6,
            title: "Sudpack",
            desc: "Zasilanie i sterowanie instalacją chłodu technologicznego dla potrzeb urządzeń drukarskich, instalacja automatyki wentylacji w układzie różnicy ciśnień oraz Detekcja gazu w pomieszczeniach Ex",
            place: "Kłobuck",
            data: 2016,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 7,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu",
            place: "Kłobuck",
            data: 2015,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 8,
            title: "Ożarów Business Park",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu ",
            place: "Ożarów",
            data: 2015,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 9,
            title: "Dispersion & Resins",
            desc: "Instalacja zasilania i sterowania pomp kotłowni, pomp układu chłodzenia reaktorów- radarowy pomiar poziomu rozpuszczalników ropopochodnych w zbiornikach magazynowych oraz wykonanie pomiaru wagowego zbiorników magazynowych w oparciu o system 'SARTORIUS' ",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 10,
            title: "PANATTONI PARK Radonice",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 11,
            title: "FAURECJA Gorzów Wlkp.",
            desc: "Instalacja zasilania i sterowania układu chłodzenia wtryskarek CoolingSystem",
            place: "Gorzów Wlkp.",
            data: 2015,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 12,
            title: "Arsanit Konin",
            desc: "Instalacja zasilania i sterowania urządzeń wentylacyjnych oraz instalacja detekcji gazu (pentanu)",
            place: "Konin",
            data: 2014,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 13,
            title: "KOOPMAN Komorniki",
            desc: "Instalacja zasilania i sterowania klimakonwektorów i wentylatorów wyciągowych oraz instalacja zasilania i sterowania pompami obiegowymi w układzie pomp ciepła",
            place: "Komorniki",
            data: 2014,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 14,
            title: "GOOD POINT Łubna",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu",
            place: "Łubna",
            data: 2014,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 15,
            title: "POLARIS Opole",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu",
            place: "Opole",
            data: 2014,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 16,
            title: "UNISERVICE Skarbimierz",
            desc: "Instalacja automatyki farmy solarnej",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 17,
            title: "UNITEDPACKAGING Skarbimierz",
            desc: "Instalacja zasilania, sterowania i automatki nagrzewnic wodnych i urządzeń wentylacyjnych ",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 18,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu",
            place: "Tarnobrzeg",
            data: 2013,
            thumbnail: Thb,
            link: "/",
        },
        {
            id: 19,
            title: "LEAR Legnica",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu",
            place: "Legnica",
            data: 2013,
            thumbnail: Thb,
            link: "/",
        },
    ]

    return (
        <>
            <Switch>
                <Route path="/" exact component={(props) => <HomePage data={SERVICES_DATA} />} />
                <Route path="/oferta" exact component={(props) => <Services data={SERVICES_DATA} />} />
                <Route path="/realizacje" exact component={(props) => <Portfolio data={PORTFOLIO_DATA} />} />
                <Route path="/kontakt" exact component={Contact} />
            </Switch>
        </>
    );
}

export default Page;