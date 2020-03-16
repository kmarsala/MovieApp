import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardLink = ({ linkInfo }) => {
    return (
        <NavLink to={linkInfo.route} className='dashboard-link'>
            <i className={linkInfo.icon} aria-hidden="true" />
            <h1>{linkInfo.name}</h1>
        </NavLink>
    );
}

export default DashboardLink;
