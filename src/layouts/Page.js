import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsListPage from '../pages/ProjectsListPage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';

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
import Thb1 from '../images/portfolio/thumbnail/1.jpg';
import Thb2 from '../images/portfolio/thumbnail/2.jpg';
import Thb3 from '../images/portfolio/thumbnail/3.jpg';
import Thb4 from '../images/portfolio/thumbnail/4.jpg';
import Thb5 from '../images/portfolio/thumbnail/5.jpg';
import Thb6 from '../images/portfolio/thumbnail/6.jpg';
import Thb7 from '../images/portfolio/thumbnail/7.jpg';
import Thb8 from '../images/portfolio/thumbnail/8.jpg';
import Thb9 from '../images/portfolio/thumbnail/9.jpg';
import Thb10 from '../images/portfolio/thumbnail/10.jpg';
import Thb11 from '../images/portfolio/thumbnail/11.jpg';
import Thb12 from '../images/portfolio/thumbnail/12.jpg';
import Thb13 from '../images/portfolio/thumbnail/13.jpg';
import Thb14 from '../images/portfolio/thumbnail/14.jpg';
import Thb15 from '../images/portfolio/thumbnail/15.jpg';
import Thb16 from '../images/portfolio/thumbnail/16.jpg';
import Thb17 from '../images/portfolio/thumbnail/17.jpg';
import Thb18 from '../images/portfolio/thumbnail/18.jpg';
import Thb19 from '../images/portfolio/thumbnail/19.jpg';

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
            desc: "Instalacja automatyki i sterowania procesu produkcyjnego - grzanie/chłodzenie oraz podawania surowców do reaktorów żywic syntetycznych w Dispersions&Resins we Włocławku.",
            place: "Włocławek",
            data: 2019,
            thumbnail: Thb1,
            images: [Thb1, Thb2, Thb3],
        },
        {
            id: 2,
            title: "Superfos",
            desc: "Instalacja chłodzenia hali produkcyjnej, automatyka sterowania produkcji chłodu z agregatów wody lodowej i drycoolerów.",
            place: "Lubień Kujawski",
            data: 2018,
            thumbnail: Thb2,
            images: [Thb1, Thb2],
        },
        {
            id: 3,
            title: "Dispersions&Resins",
            desc: "Instalacja automatyki i sterowania – grzanie/chłodzenie wsadu reaktora do produkcji żywic syntetycznych.",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb3,
            images: [Thb1, Thb2],
        },
        {
            id: 4,
            title: "Kongsberg",
            desc: "Instalacja automatyki i sterowania urządzeń grzewczo-wentylacyjnych i detekcji gazu.",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb4,
            images: [Thb1, Thb2],
        },
        {
            id: 5,
            title: "Bombardier",
            desc: "Instalacje elektryczne zasilania i sterowania urządzeniami grzewczo-wentylacyjnymi oraz instalacja detekcji gazu (acetylen, metan).",
            place: "Wrocław",
            data: 2016,
            thumbnail: Thb5,
            images: [Thb1, Thb2],
        },
        {
            id: 6,
            title: "Sudpack",
            desc: "Zasilanie i sterowanie instalacją chłodu technologicznego dla potrzeb urządzeń drukarskich, instalacja automatyki wentylacji w układzie różnicy ciśnień oraz Detekcja gazu w pomieszczeniach Ex.",
            place: "Kłobuck",
            data: 2016,
            thumbnail: Thb6,
            images: [Thb1, Thb2],
        },
        {
            id: 7,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu.",
            place: "Kłobuck",
            data: 2015,
            thumbnail: Thb7,
            images: [Thb1, Thb2],
        },
        {
            id: 8,
            title: "Ożarów Business Park",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Ożarów",
            data: 2015,
            thumbnail: Thb8,
            images: [Thb1, Thb2],
        },
        {
            id: 9,
            title: "Dispersion & Resins",
            desc: "Instalacja zasilania i sterowania pomp kotłowni, pomp układu chłodzenia reaktorów- radarowy pomiar poziomu rozpuszczalników ropopochodnych w zbiornikach magazynowych oraz wykonanie pomiaru wagowego zbiorników magazynowych w oparciu o system 'SARTORIUS'.",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb9,
            images: [Thb1, Thb2],
        },
        {
            id: 10,
            title: "PANATTONI PARK Radonice",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb10,
            images: [Thb1, Thb2],
        },
        {
            id: 11,
            title: "FAURECJA Gorzów Wlkp.",
            desc: "Instalacja zasilania i sterowania układu chłodzenia wtryskarek CoolingSystem.",
            place: "Gorzów Wlkp.",
            data: 2015,
            thumbnail: Thb11,
            images: [Thb1, Thb2],
        },
        {
            id: 12,
            title: "Arsanit Konin",
            desc: "Instalacja zasilania i sterowania urządzeń wentylacyjnych oraz instalacja detekcji gazu (pentanu).",
            place: "Konin",
            data: 2014,
            thumbnail: Thb12,
            images: [Thb1, Thb2],
        },
        {
            id: 13,
            title: "KOOPMAN Komorniki",
            desc: "Instalacja zasilania i sterowania klimakonwektorów i wentylatorów wyciągowych oraz instalacja zasilania i sterowania pompami obiegowymi w układzie pomp ciepła.",
            place: "Komorniki",
            data: 2014,
            thumbnail: Thb13,
            images: [Thb1, Thb2],
        },
        {
            id: 14,
            title: "GOOD POINT Łubna",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Łubna",
            data: 2014,
            thumbnail: Thb14,
            images: [Thb1, Thb2],
        },
        {
            id: 15,
            title: "POLARIS Opole",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu.",
            place: "Opole",
            data: 2014,
            thumbnail: Thb15,
            images: [Thb1, Thb2],
        },
        {
            id: 16,
            title: "UNISERVICE Skarbimierz",
            desc: "Instalacja automatyki farmy solarnej.",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb16,
            images: [Thb1, Thb2],
        },
        {
            id: 17,
            title: "UNITEDPACKAGING Skarbimierz",
            desc: "Instalacja zasilania, sterowania i automatki nagrzewnic wodnych i urządzeń wentylacyjnych.",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb17,
            images: [Thb1, Thb2],
        },
        {
            id: 18,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu.",
            place: "Tarnobrzeg",
            data: 2013,
            thumbnail: Thb18,
            images: [Thb1, Thb2],
        },
        {
            id: 19,
            title: "LEAR Legnica",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu.",
            place: "Legnica",
            data: 2013,
            thumbnail: Thb19,
            images: [Thb1, Thb2],
        },
    ]

    return (
        <>
            <Switch>
                <Route path="/" exact component={(props) => <HomePage data={SERVICES_DATA} />} />
                <Route path="/oferta" exact component={(props) => <ServicesPage data={SERVICES_DATA} />} />
                <Route path="/realizacje" exact component={(props) => <ProjectsListPage data={PORTFOLIO_DATA} />} />
                <Route path="/realizacje/:id" component={(props) => <ProjectPage data={PORTFOLIO_DATA} />} />
                <Route path="/kontakt" exact component={ContactPage} />
            </Switch>
        </>
    );
}

export default Page;