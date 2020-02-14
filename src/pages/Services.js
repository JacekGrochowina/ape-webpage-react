import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {

    const services = props.data.map(service => (
        <Link to={service.link}
            className="wraper services__wraper col-4 col-6-lg col-12-sm"
            style={{ backgroundImage: `url(${service.bg})` }}>
            <div>
                <h1 className="title services__title">{service.title}</h1>
            </div>
        </Link>
    ))

    return (
        <div className="services row">
            {services}
        </div>
    )
}

export default Services;