import React from 'react';
import { List } from 'antd';
import DashboardLink from './DashboardLink';
import './Dashboard.less';

const LINKS = [{ name: 'Now Playing', icon: 'fa fa-ticket', route: '/nowplaying' },
{ name: 'Upcoming Releases', icon: 'fa fa-video-camera', route: '/upcoming' },
{ name: 'Genres', icon: 'fa fa-film', route: '/genres' }]

const Dashboard = () => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      className='dashboard'
      dataSource={LINKS}
      renderItem={link => (
        <List.Item>
          <DashboardLink linkInfo={link} />
        </List.Item>
      )}
    />
  );
}

export default Dashboard;
