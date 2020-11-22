import React from 'react';

import { PagesUi } from '~/components/pages/ui/PagesUi';
import { PagesNotFound } from '~/components/pages/not-found/PagesNotFound';

enum RouterHref {
  Main = '/',
  NotFound = '*',
}

type RouterConfig = {
  href: RouterHref;
  component: () => JSX.Element;
  exact?: boolean;
};

const routerConfig: RouterConfig[] = [
  {
    href: RouterHref.Main,
    component: () => <PagesUi />,
  },
  {
    href: RouterHref.NotFound,
    exact: false,
    component: () => <PagesNotFound />,
  },
];

export { routerConfig, RouterHref };
