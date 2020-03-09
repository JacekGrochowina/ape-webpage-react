import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsListPage = (props) => {

    const realizations = props.data.map(realization => (
        <div className="wraper col-6 col-12-md" key={realization.id}>
            <div className="wraper projects__wraper ">
                <div className="projects__image-wraper">
                    <img className="projects__image" src={realization.thumbnail} alt={realization.title} />
                </div>
                <div className="header-wraper projects__header-wraper row">
                    <h1 className="title projects__title--article">{realization.title}</h1>
                    <div className="wraper">
                        <h4 className="projects__h4">
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                            {realization.place}
                        </h4>
                        <h4 className="projects__h4">
                            <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                            {realization.data}
                        </h4>
                    </div>
                </div>
                <Link to={`/realizacje/${realization.id}`} className="projects__a">
                    zobacz więcej
                    <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                </Link>
            </div>
        </div>
    ))

    return (
        <div className="projects">
            <div className="container projects__container row">
                <h1 className="title projects__title">Ważniejsze realizacje</h1>
                <div className="row w-100 marg-b">
                    {realizations}
                </div>
            </div>
        </div>
    )
}

export default ProjectsListPage;