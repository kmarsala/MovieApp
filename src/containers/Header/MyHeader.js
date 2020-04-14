import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import { Layout } from 'antd';
import TmdbIcon from '../../assets/tmdb-power.png';
import { MenuOutlined } from '@ant-design/icons';
import './MyHeader.less';

const { Header } = Layout;

const MyHeader = ({ toggleSidebar }) => {
  return (
    <>
      <Breakpoint medium up>
        <Header className="header">
          <NavLink to="/">
            <img className='logo' src={TmdbIcon} alt="logo" />
          </NavLink>
          <NavLink activeClassName='active' to="/nowplaying">Now Playing</NavLink>
          <NavLink to="/upcoming">Coming Soon</NavLink>
          <NavLink to="/search">Movie Search</NavLink>
          <NavLink to="/genres">Genres</NavLink>
        </Header>
      </Breakpoint>
      <Breakpoint small down>
        <Header className="small-header">
          <MenuOutlined onClick={toggleSidebar} />
          <NavLink to="/">
            <img className='logo' src={TmdbIcon} alt="logo" />
          </NavLink>
        </Header>
      </Breakpoint>
    </>
  );
};

export default MyHeader;
