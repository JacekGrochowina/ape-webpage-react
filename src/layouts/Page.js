import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/oferta" exact component={Services} />
                <Route path="/realizacje" exact component={Portfolio} />
                {/* <Route path="/contact" exact component={Portfolio} /> */}
            </Switch>
        </>
    );
}

export default Page;