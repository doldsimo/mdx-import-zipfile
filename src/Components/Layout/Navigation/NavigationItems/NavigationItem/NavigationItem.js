import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigationItem.css';

const NavigationItem = (props) => {

    const exitLecture = () => {
        history.push("/");
        setPageIndex(0);
        setContent(null);
    }

    if (props.exit) {
        return (
            <div className="navigation-item" onClick={exitLecture}>
                <NavLink
                    to={props.link}
                    activeClassName="active"
                    exact={props.exact}
                > {props.children} </NavLink >
            </div>
        )
    }
    return (
        <div className="navigation-item">
            <NavLink
                to={props.link}
                activeClassName="active"
                exact={props.exact}
            > {props.children} </NavLink >
        </div>
    )
}

export default NavigationItem
