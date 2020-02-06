import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


const SwiperMain = (props) => {
    const params = {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }

    const slides = props.data.map(slide => (
        <div
            key={slide.id}
            style={{ backgroundImage: `url(${slide.bg})` }}
        >
            <Link to={slide.link} className="swiper-wraper">
                <h1 className="swiper-h1">{slide.title}</h1>
                <p className="swiper-p">czytaj więcej<FontAwesomeIcon icon={['fas', 'chevron-right']} /></p>
                <span className="swiper-border"></span>
                <span className="swiper-border"></span>
                <span className="swiper-border"></span>
                <span className="swiper-border"></span>
            </Link>
        </div>
    ))

    return (
        <Swiper {...params}>
            {slides}
        </Swiper >
    )
}

export default SwiperMain;