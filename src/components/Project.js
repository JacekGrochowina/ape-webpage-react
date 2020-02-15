import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {

    const gallery = props.data[props.id - 1].images.map(e => (
        <div className="project__wraper-img col-4 col-6-md col-12-sm">
            <img className="project__img" src={e} alt={props.data[props.id - 1].title} />
        </div>
    ))

    return (
        <>
            <h1 className="title projects__title--subpage-big">{props.data[props.id - 1].title}</h1>

            <div className="wraper wraper--info">
                <h4 className="projects__h4">
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                    {props.data[props.id - 1].place}
                </h4>

                <h4 className="projects__h4">
                    <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                    {props.data[props.id - 1].data}
                </h4>
            </div>

            <p className="project__p">{props.data[props.id - 1].desc}</p>

            <div className="project__gallery row">
                {gallery}
            </div>
        </>
    )
}

export default Project;