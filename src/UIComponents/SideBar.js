import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => ( 
    
        <nav id="sidebar">
            <div className="sidebar-header">
                <h4>Yuvaraj </h4><h4> Sakthivel</h4>
            </div>
            <ul className="list-unstyled components"> 
                <p>Task Management</p>
                <li>
                    <NavLink to='/' activeClassName='activeNav' exact={true}>Dashboard</NavLink>
                </li>
            </ul>
        </nav>
);
export default SideBar;