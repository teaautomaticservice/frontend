import React from 'react';

import { PagesUi } from '~/components/pages/ui/PagesUi';
import { PagesAuthorization } from '~/components/pages/authorization/PagesAuthorization';

enum RouterHref {
  Main = '/',
  Authorization = '/authorization',
}

type RouterConfig = {
  href?: RouterHref;
  component: React.FC;
  exact?: boolean;
};

const routerConfig: RouterConfig[] = [
  {
    href: RouterHref.Main,
    component: PagesUi,
  },
  {
    href: RouterHref.Authorization,
    exact: false,
    component: PagesAuthorization,
  },
];

export { routerConfig, RouterHref };
