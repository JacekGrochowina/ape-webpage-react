import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

// import startFromTop from '../startFromTop';

import Logo from '../images/logo.svg';

const navList = [
    { name: "domowa", path: "/", exact: true },
    { name: "oferta", path: "/oferta" },
    { name: "realizacje", path: "/realizacje" },
    { name: "kontakt", path: "/kontakt" },
]

class Navigation extends Component {

    state = {
        active: false,
    }

    handleClick = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }));
    }

    render() {
        /* Generate list of links */
        const menu = navList.map(item => (
            <li key={item.name} className="nav__item">
                <NavLink to={item.path} exact={item.exact ? item.exact : false} className="nav__link" onClick={this.startFromTop}>{item.name}</NavLink>
            </li>
        ))

        return (
            <nav className="nav" >
                <div className={this.state.active ? "container nav__container row is-active" : "container nav__container row"} >
                    <div className="wraper row">
                        <Link to="/" className="nav__logo">
                            <img src={Logo} alt="" className="nav__image" />
                        </Link>
                        <button className={this.state.active ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} type="button" onClick={this.handleClick}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <ul className={this.state.active ? "nav__list row is-active" : "nav__list row"}>
                        {menu}
                    </ul>
                </div>
            </nav >
        );
    }
}

export default Navigation;