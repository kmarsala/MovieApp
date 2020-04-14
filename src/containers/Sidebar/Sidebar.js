import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import './Sidebar.less';

const { Sider } = Layout;

const Sidebar = ({ isSidebarHidden, toggleSidebar }) => {

  return (
    <Sider collapsed={isSidebarHidden} collapsedWidth={0} onClick={toggleSidebar}>
      <NavLink to="/nowplaying">Now Playing</NavLink>
      <NavLink to="/upcoming">Coming Soon</NavLink>
      <NavLink to="/search">Movie Search</NavLink>
      <NavLink to="/genres">Genres</NavLink>
    </Sider>
  );
};

export default Sidebar;
