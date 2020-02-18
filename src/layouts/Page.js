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

/* Images of Portfolio */
import Img1Pr1 from '../images/portfolio/2019/dispersions&resins/1.jpg';
import Img2Pr1 from '../images/portfolio/2019/dispersions&resins/2.jpg';
import Img3Pr1 from '../images/portfolio/2019/dispersions&resins/3.jpg';
import Img4Pr1 from '../images/portfolio/2019/dispersions&resins/4.jpg';
import Img5Pr1 from '../images/portfolio/2019/dispersions&resins/5.jpg';
import Img6Pr1 from '../images/portfolio/2019/dispersions&resins/6.jpg';
import Img7Pr1 from '../images/portfolio/2019/dispersions&resins/7.jpg';
import Img8Pr1 from '../images/portfolio/2019/dispersions&resins/8.jpg';
import Img9Pr1 from '../images/portfolio/2019/dispersions&resins/9.jpg';
import Img10Pr1 from '../images/portfolio/2019/dispersions&resins/10.jpg';
import Img11Pr1 from '../images/portfolio/2019/dispersions&resins/11.jpg';
import Img12Pr1 from '../images/portfolio/2019/dispersions&resins/12.jpg';

import Img1Pr2 from '../images/portfolio/2018/superfos/1.jpg';
import Img2Pr2 from '../images/portfolio/2018/superfos/2.jpg';
import Img3Pr2 from '../images/portfolio/2018/superfos/3.jpg';
import Img4Pr2 from '../images/portfolio/2018/superfos/4.jpg';
import Img5Pr2 from '../images/portfolio/2018/superfos/5.jpg';
import Img6Pr2 from '../images/portfolio/2018/superfos/6.jpg';

import Img1Pr3 from '../images/portfolio/2017/dispersions&resins/1.png';
import Img2Pr3 from '../images/portfolio/2017/dispersions&resins/2.png';
import Img3Pr3 from '../images/portfolio/2017/dispersions&resins/3.png';
import Img4Pr3 from '../images/portfolio/2017/dispersions&resins/4.png';

import Img1Pr4 from '../images/portfolio/2017/kongsberg/1.jpg';
import Img2Pr4 from '../images/portfolio/2017/kongsberg/2.jpg';
import Img3Pr4 from '../images/portfolio/2017/kongsberg/3.jpg';
import Img4Pr4 from '../images/portfolio/2017/kongsberg/4.jpg';
import Img5Pr4 from '../images/portfolio/2017/kongsberg/5.jpg';

import Img1Pr5 from '../images/portfolio/2016/bombardier/1.jpg';
import Img2Pr5 from '../images/portfolio/2016/bombardier/2.jpg';
import Img3Pr5 from '../images/portfolio/2016/bombardier/3.jpg';
import Img4Pr5 from '../images/portfolio/2016/bombardier/4.jpg';
import Img5Pr5 from '../images/portfolio/2016/bombardier/5.jpg';
import Img6Pr5 from '../images/portfolio/2016/bombardier/6.jpg';
import Img7Pr5 from '../images/portfolio/2016/bombardier/7.jpg';
import Img8Pr5 from '../images/portfolio/2016/bombardier/8.jpg';
import Img9Pr5 from '../images/portfolio/2016/bombardier/9.jpg';
import Img10Pr5 from '../images/portfolio/2016/bombardier/10.jpg';

import Img1Pr6 from '../images/portfolio/2016/sudpack/1.jpg';
import Img2Pr6 from '../images/portfolio/2016/sudpack/2.jpg';
import Img3Pr6 from '../images/portfolio/2016/sudpack/3.jpg';
import Img4Pr6 from '../images/portfolio/2016/sudpack/4.jpg';
import Img5Pr6 from '../images/portfolio/2016/sudpack/5.jpg';
import Img6Pr6 from '../images/portfolio/2016/sudpack/6.jpg';
import Img7Pr6 from '../images/portfolio/2016/sudpack/7.jpg';
import Img8Pr6 from '../images/portfolio/2016/sudpack/8.jpg';
import Img9Pr6 from '../images/portfolio/2016/sudpack/9.jpg';
import Img10Pr6 from '../images/portfolio/2016/sudpack/10.jpg';

import Img1Pr7 from '../images/portfolio/2015/panattoniparktarnobrzeg/1.jpg';

import Img1Pr8 from '../images/portfolio/2015/ozarowbusinesspark/1.jpg';

import Img1Pr9 from '../images/portfolio/2015/dispersion&resins/1.jpg';

import Img1Pr10 from '../images/portfolio/2015/panattoniparkradonice/1.jpg';

import Img1Pr11 from '../images/portfolio/2015/faurecjagorzowwlkp/1.jpg';

import Img1Pr12 from '../images/portfolio/2014/arsanitkonin/1.jpg';

import Img1Pr13 from '../images/portfolio/2014/koopmankomorniki/1.jpg';

import Img1Pr14 from '../images/portfolio/2014/goodpointlubna/1.jpg';

import Img1Pr15 from '../images/portfolio/2014/polarisopole/1.jpg';

import Img1Pr16 from '../images/portfolio/2013/uniserviceskarbimierz/1.jpg';

import Img1Pr17 from '../images/portfolio/2013/unitedpackagingskarbimierz/1.jpg';

import Img1Pr18 from '../images/portfolio/2013/panattoniparktarnobrzeg/1.jpg';

import Img1Pr19 from '../images/portfolio/2013/learlegnica/1.jpg';

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
            images: [Img1Pr1, Img2Pr1, Img3Pr1, Img4Pr1, Img5Pr1, Img6Pr1, Img7Pr1, Img8Pr1, Img9Pr1, Img10Pr1, Img11Pr1, Img12Pr1],
        },
        {
            id: 2,
            title: "Superfos",
            desc: "Instalacja chłodzenia hali produkcyjnej, automatyka sterowania produkcji chłodu z agregatów wody lodowej i drycoolerów.",
            place: "Lubień Kujawski",
            data: 2018,
            thumbnail: Thb2,
            images: [Img1Pr2, Img2Pr2, Img3Pr2, Img4Pr2, Img5Pr2, Img6Pr2],
        },
        {
            id: 3,
            title: "Dispersions&Resins",
            desc: "Instalacja automatyki i sterowania – grzanie/chłodzenie wsadu reaktora do produkcji żywic syntetycznych.",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb3,
            images: [Img1Pr3, Img2Pr3, Img3Pr3, Img4Pr3],
        },
        {
            id: 4,
            title: "Kongsberg",
            desc: "Instalacja automatyki i sterowania urządzeń grzewczo-wentylacyjnych i detekcji gazu.",
            place: "Włocławek",
            data: 2017,
            thumbnail: Thb4,
            images: [Img1Pr4, Img2Pr4, Img3Pr4, Img4Pr4, Img5Pr4],
        },
        {
            id: 5,
            title: "Bombardier",
            desc: "Instalacje elektryczne zasilania i sterowania urządzeniami grzewczo-wentylacyjnymi oraz instalacja detekcji gazu (acetylen, metan).",
            place: "Wrocław",
            data: 2016,
            thumbnail: Thb5,
            images: [Img1Pr5, Img2Pr5, Img3Pr5, Img4Pr5, Img5Pr5, Img6Pr5, Img7Pr5, Img8Pr5, Img9Pr5, Img10Pr5],
        },
        {
            id: 6,
            title: "Sudpack",
            desc: "Zasilanie i sterowanie instalacją chłodu technologicznego dla potrzeb urządzeń drukarskich, instalacja automatyki wentylacji w układzie różnicy ciśnień oraz Detekcja gazu w pomieszczeniach Ex.",
            place: "Kłobuck",
            data: 2016,
            thumbnail: Thb6,
            images: [Img1Pr6, Img2Pr6, Img3Pr6, Img4Pr6, Img5Pr6, Img6Pr6, Img7Pr6, Img8Pr6, Img9Pr6, Img10Pr6],
        },
        {
            id: 7,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu.",
            place: "Kłobuck",
            data: 2015,
            thumbnail: Thb7,
            images: [Img1Pr7],
        },
        {
            id: 8,
            title: "Ożarów Business Park",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Ożarów",
            data: 2015,
            thumbnail: Thb8,
            images: [Img1Pr8],
        },
        {
            id: 9,
            title: "Dispersion & Resins",
            desc: "Instalacja zasilania i sterowania pomp kotłowni, pomp układu chłodzenia reaktorów- radarowy pomiar poziomu rozpuszczalników ropopochodnych w zbiornikach magazynowych oraz wykonanie pomiaru wagowego zbiorników magazynowych w oparciu o system 'SARTORIUS'.",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb9,
            images: [Img1Pr9],
        },
        {
            id: 10,
            title: "PANATTONI PARK Radonice",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Włocławek",
            data: 2015,
            thumbnail: Thb10,
            images: [Img1Pr10],
        },
        {
            id: 11,
            title: "FAURECJA Gorzów Wlkp.",
            desc: "Instalacja zasilania i sterowania układu chłodzenia wtryskarek CoolingSystem.",
            place: "Gorzów Wlkp.",
            data: 2015,
            thumbnail: Thb11,
            images: [Img1Pr11],
        },
        {
            id: 12,
            title: "Arsanit Konin",
            desc: "Instalacja zasilania i sterowania urządzeń wentylacyjnych oraz instalacja detekcji gazu (pentanu).",
            place: "Konin",
            data: 2014,
            thumbnail: Thb12,
            images: [Img1Pr12],
        },
        {
            id: 13,
            title: "KOOPMAN Komorniki",
            desc: "Instalacja zasilania i sterowania klimakonwektorów i wentylatorów wyciągowych oraz instalacja zasilania i sterowania pompami obiegowymi w układzie pomp ciepła.",
            place: "Komorniki",
            data: 2014,
            thumbnail: Thb13,
            images: [Img1Pr13],
        },
        {
            id: 14,
            title: "GOOD POINT Łubna",
            desc: "Instalacja zasilania i sterowania promienników gazowych oraz instalacja detekcji gazu.",
            place: "Łubna",
            data: 2014,
            thumbnail: Thb14,
            images: [Img1Pr14],
        },
        {
            id: 15,
            title: "POLARIS Opole",
            desc: "Instalacja zasilania i sterowania nagrzewnic gazowych, wentylatorów wyciągowych oraz detekcji gazu.",
            place: "Opole",
            data: 2014,
            thumbnail: Thb15,
            images: [Img1Pr15],
        },
        {
            id: 16,
            title: "UNISERVICE Skarbimierz",
            desc: "Instalacja automatyki farmy solarnej.",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb16,
            images: [Img1Pr16],
        },
        {
            id: 17,
            title: "UNITEDPACKAGING Skarbimierz",
            desc: "Instalacja zasilania, sterowania i automatki nagrzewnic wodnych i urządzeń wentylacyjnych.",
            place: "Skarbimierz",
            data: 2013,
            thumbnail: Thb17,
            images: [Img1Pr17],
        },
        {
            id: 18,
            title: "PANATTONI PARK Tarnobrzeg",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu.",
            place: "Tarnobrzeg",
            data: 2013,
            thumbnail: Thb18,
            images: [Img1Pr18],
        },
        {
            id: 19,
            title: "LEAR Legnica",
            desc: "Instalacja zasilania, sterowania i automatyki nagrzewnic gazowych, wentylatorów i destratyfikatorów oraz instalacja detekcji gazu.",
            place: "Legnica",
            data: 2013,
            thumbnail: Thb19,
            images: [Img1Pr19],
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