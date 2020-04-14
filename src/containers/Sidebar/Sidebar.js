import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
// import './Sidebar.less';

const { Sider } = Layout;

const Sidebar = ({ isSidebarHidden, toggleSidebar }) => {

  return (
    <Sider collapsed={isSidebarHidden} collapsedWidth={0}>
      <div>
        <li className="sidebar-link" onClick={toggleSidebar}>
          <NavLink to="/nowplaying">Now Playing</NavLink>
        </li>
        <li className="sidebar-link" onClick={toggleSidebar}>
          <NavLink to="/upcoming">Coming Soon</NavLink>
        </li>
        <li className="sidebar-link" onClick={toggleSidebar}>
          <NavLink to="/search">Movie Search</NavLink>
        </li>
        <li className="sidebar-link" onClick={toggleSidebar}>
          <NavLink to="/genres">Genres</NavLink>
        </li>
      </div>
    </Sider>
  );
};

export default Sidebar;
