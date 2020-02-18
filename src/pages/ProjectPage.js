import React from 'react';
import { useParams } from 'react-router-dom';
import Project from '../components/Project';
import ReturnBtn from '../components/ReturnBtn';

const ProjectPage = (props) => {

    let { id } = useParams();

    return (
        <div className="project">
            <div className="container project__container">

                <ReturnBtn backTo="/realizacje" />
                <h1 className="title projects__title--subpage">Realizacja</h1>
                <Project id={id} data={props.data} />

            </div>
        </div >
    )
}

export default ProjectPage;