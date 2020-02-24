import React from 'react';

const ErrorPage = () => {
    return (
        <div className="error">
            <div className="container container__error">
                <h1 className="title error__title--huge">404</h1>
                <h1 className="title error__title">Strony nie znaleziono ...</h1>
            </div>
        </div>
    )
}

export default ErrorPage;