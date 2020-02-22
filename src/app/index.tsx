import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css';
import styles from './styles.scss';
import logo from '../static/logo.svg';

interface Route {
  route: { routes: Array<object> };
}

const App = ({ route }: Route) => (
  <div className={styles.App}>
    <Helmet {...config.app} />
    <Link to="/" className={styles.header}>
      <img src={logo} alt="Logo" role="presentation" />
      <h1>{config.app.title}</h1>
    </Link>
    <hr />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
