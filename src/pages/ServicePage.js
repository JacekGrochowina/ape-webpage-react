import React from 'react';
// import { useParams } from 'react-router-dom';
// import Service from '../components/Service';
import ReturnBtn from '../components/ReturnBtn';

const ServicePage = (props) => {

    // let { id } = useParams();

    return (
        <div className="service">
            <div className="container service__container">

                <ReturnBtn backTo="/oferta" />
                <h1 className="title projects__title--subpage">Oferta</h1>
                {/* <Service id={id} data={props.data} /> */}

            </div>
        </div >
    )
}

export default ServicePage;