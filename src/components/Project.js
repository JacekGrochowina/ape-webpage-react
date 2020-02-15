import React from 'react';

const Project = (props) => {
    return (
        <>
            <h1 className="title">{props.data[props.id - 1].title}</h1>
        </>
    )
}

export default Project;