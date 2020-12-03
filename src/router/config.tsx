import React from 'react';

import { PagesUi } from '~/components/pages/ui/PagesUi';
import { PagesAuthorization } from '~/components/pages/authorization/PagesAuthorization';
import { PagesAbout } from '~/components/pages/about/PagesAbout';

enum RouterHref {
  Main = '/',
  Authorization = '/authorization',
  About = '/about',
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
    component: PagesAuthorization,
  },
  {
    href: RouterHref.About,
    component: PagesAbout,
  },
];

export { routerConfig, RouterHref };
