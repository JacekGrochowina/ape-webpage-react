import React from 'react';
import { NavLink } from 'react-router-dom';

const ServicesPage = (props) => {

    const services = props.data.map(service => (
        <NavLink to={service.link} key={service.id}
            className="wraper services__wraper col-4 col-6-lg col-12-sm"
            style={{ backgroundImage: `url(${service.bg})` }}>
            <div>
                <h1 className="title services__title">{service.title}</h1>
            </div>
        </NavLink>
    ))

    return (
        <div className="services row">
            {services}
        </div>
    )
}

export default ServicesPage;