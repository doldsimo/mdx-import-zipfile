import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LectureContext } from '../../../../../context/LectureContext';
import { useHistory } from 'react-router';

import './navigationItem.css';

const NavigationItem = (props) => {
    const { setContent, setPageIndex } = useContext(LectureContext);
    const history = useHistory();

    const exitLecture = () => {
        history.push("/");
        setPageIndex(0);
        setContent(null);
    }

    const setPageIndexOnClick = () => {
        setPageIndex(props.pageIndex);
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
        <div className="navigation-item" onClick={setPageIndexOnClick}>
            <NavLink
                to={props.link}
                activeClassName="active"
                exact={props.exact}
            > {props.children} </NavLink >
        </div>
    )
}

export default NavigationItem
