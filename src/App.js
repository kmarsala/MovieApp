import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import { Layout } from 'antd';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import Dashboard from './containers/Dashboard/Dashboard';
import Upcoming from './containers/Upcoming/Upcoming';
import MovieSearch from './containers/MovieSearch/MovieSearch';
import Genres from './containers/Genres/Genres';
import GenreList from './containers/Genres/GenreList';
import MovieDetailsContainer from './containers/MovieDetails/MovieDetailsContainer';
import Header from './containers/Header/MyHeader';
import './App.less';

const { Content } = Layout;


const App = () => {
  return (
    <BreakpointProvider>
      <Layout>
        <div className="App">

          <Router>
            <Header />
            <Layout>
              <Content>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/search" component={MovieSearch} />
                  <Route exact path="/nowplaying" component={NowPlaying} />
                  <Route exact path="/upcoming" component={Upcoming} />
                  <Route exact path="/genres" component={Genres} />
                  <Route
                    exact
                    path="/genres/:genreName/:genreId"
                    component={GenreList}
                  />
                  <Route exact path="/movie/:id" component={MovieDetailsContainer} />
                </Switch>
              </Content>
            </Layout>
          </Router>
        </div >
      </Layout>
    </BreakpointProvider >
  );
}

export default App;
