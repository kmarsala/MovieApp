import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import TmdbIcon from '../../assets/tmdb-power.png';
import './Sidebar.scss';

const { Sider } = Layout;


const Sidebar = () => {
  const [expandedLinks, setExpandedLinks] = useState(false);

  const toggleLinks = () => {
    setExpandedLinks(!expandedLinks);
  };

  return (
    <Sider>
      <ul className="sidebar-top">
        <div className="sidebar-links">
          <li className="sidebar-link bars" onClick={toggleLinks}>
            <i className="fa fa-bars" aria-hidden="true" />
          </li>
          <li
            className="sidebar-link-logo"
            onClick={() => setExpandedLinks(false)}
          >
            <NavLink to="/">
              <img src={TmdbIcon} alt="logo" />
            </NavLink>
          </li>
        </div>
      </ul>
      <CSSTransition
        in={expandedLinks}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <div>
          <li className="sidebar-link" onClick={() => setExpandedLinks(false)}>
            <NavLink to="/nowplaying">Now Playing</NavLink>
          </li>
          <li className="sidebar-link" onClick={() => setExpandedLinks(false)}>
            <NavLink to="/upcoming">Coming Soon</NavLink>
          </li>
          <li className="sidebar-link" onClick={() => setExpandedLinks(false)}>
            <NavLink to="/search">Movie Search</NavLink>
          </li>
          <li className="sidebar-link" onClick={() => setExpandedLinks(false)}>
            <NavLink to="/genres">Genres</NavLink>
          </li>
        </div>
      </CSSTransition>
    </Sider>
  );
};

export default Sidebar;
