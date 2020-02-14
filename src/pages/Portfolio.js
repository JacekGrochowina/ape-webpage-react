import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = (props) => {

    const realizations = props.data.map(realization => (
        <div className="wraper col-6 col-12-sm">
            <div className="wraper portfolio__wraper ">
                <div className="portfolio__image-wraper">
                    <img className="portfolio__image" src={realization.thumbnail} alt={realization.title} />
                </div>
                <div className="header-wraper portfolio__header-wraper row">
                    <h1 className="title portfolio__title--article">{realization.title}</h1>
                    <div className="wraper">
                        <h4 className="portfolio__h4">
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                            {realization.place}
                        </h4>
                        <h4 className="portfolio__h4">
                            <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                            {realization.data}
                        </h4>
                    </div>
                </div>
                <p className="portfolio__p">{realization.desc}</p>
                <Link to={realization.link} className="portfolio__a">zobacz więcej<FontAwesomeIcon icon={['fas', 'chevron-right']} /></Link>
            </div>
        </div>
    ))

    return (
        <div className="portfolio">
            <div className="container portfolio__container row">
                <h1 className="title portfolio__title">Ważniejsze realizacje</h1>
                <div className="row w-100 marg-b">
                    {realizations}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;