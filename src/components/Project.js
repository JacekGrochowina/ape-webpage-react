import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
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
        </>
    )
}

export default Project;