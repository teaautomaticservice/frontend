import React from 'react';

import { PagesUi } from '~/components/pages/ui/PagesUi';
import { PagesNotFound } from '~/components/pages/not-found/PagesNotFound';

enum RoutesHref {
  Main = '/',
  NotFound = '*',
}

type RouterConfig = {
  href: RoutesHref;
  component: () => JSX.Element;
  exact?: boolean;
};

const routerConfig: RouterConfig[] = [
  {
    href: RoutesHref.Main,
    component: () => <PagesUi />,
  },
  {
    href: RoutesHref.NotFound,
    exact: false,
    component: () => <PagesNotFound />,
  },
];

export { routerConfig, RoutesHref };
