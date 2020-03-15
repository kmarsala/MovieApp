import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import { Layout } from 'antd';
import TmdbIcon from '../../assets/tmdb-power.png';
import Sidebar from '../Sidebar/Sidebar';
import './MyHeader.less';

const { Header } = Layout;

const MyHeader = () => {
  return (
    <>
      <Breakpoint medium up>
        <Header className="header">
          <NavLink to="/">
            <img src={TmdbIcon} alt="logo" />
          </NavLink>
          <NavLink to="/nowplaying">Now Playing</NavLink>
          <NavLink to="/upcoming">Coming Soon</NavLink>
          <NavLink to="/search">Movie Search</NavLink>
          <NavLink to="/genres">Genres</NavLink>
        </Header>
      </Breakpoint>
      <Breakpoint small down>
        <Sidebar />
      </Breakpoint>
    </>
  );
};

export default MyHeader;
