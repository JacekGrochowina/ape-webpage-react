import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReturnBtn = () => {
    return (
        <Link to="/realizacje" className="return-btn">
            <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            Wstecz
        </Link>
    )
}

export default ReturnBtn;