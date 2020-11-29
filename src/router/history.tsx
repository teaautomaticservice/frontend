import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { PagesNotFound } from '~/components/pages/not-found/PagesNotFound';

import { routerConfig } from './config';

const history = createBrowserHistory();

const RouterHistory: React.FC = () => {
  const switchesEls = routerConfig.map(({ href, component, exact = true }) => (
    <Route key={href} exact={exact} path={href} component={component} />
  ));

  return (
    <Router history={history}>
      <Switch>
        {switchesEls}
        <Route component={PagesNotFound} />
      </Switch>
    </Router>
  );
};

export { RouterHistory };
