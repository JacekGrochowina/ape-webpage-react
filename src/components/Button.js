import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
    return (
        <Link to={props.link} className="button">
            {props.text}<FontAwesomeIcon icon={props.icon} />
        </Link>
    )
}

export default Button;