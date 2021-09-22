import React from 'react';
import './Toolbar.css';
import {NavLink} from 'react-router-dom';

function Toolbar() {

    return(
        <div className={"Toolbar"}>
            <NavLink to="/white">
                <button>White</button>
            </NavLink>
            <NavLink to="/blue">
                <button>Blue</button>
            </NavLink>
        </div>
    );
}

export default Toolbar;