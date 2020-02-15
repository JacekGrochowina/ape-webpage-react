import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Project from '../components/Project';

const ProjectPage = (props) => {

    let { id } = useParams();

    return (
        <div className="project">
            <div className="container project__container">

                <h1 className="title">Realizacja</h1>
                <Project id={id} data={props.data} />

                <Link to="/realizacje">Wróć</Link>
            </div>
        </div >
    )
}

export default ProjectPage;