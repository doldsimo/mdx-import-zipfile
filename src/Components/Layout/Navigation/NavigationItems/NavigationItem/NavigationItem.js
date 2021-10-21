import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigationItem.css';

const NavigationItem = (props) => {
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
