import React from 'react';

import { PagesMain } from '~/components/pages/main/PagesMain';
import { PagesAuthorization } from '~/components/pages/authorization/PagesAuthorization';
import { PagesAbout } from '~/components/pages/about/PagesAbout';
import { PagesUiPreview } from '~/components/pages/ui/PagesUiPreview';
import { PagesProfileDetail } from '~/components/pages/profile-detail/PagesProfileDetail';
import { PagesDevices } from '~/components/pages/devices/PagesDevices';

enum RouterHref {
  Main = '/',
  Devices = '/devices',
  Authorization = '/authorization',
  About = '/about',
  UiPreview = '/ui-preview',
  ProfileDetail = '/profile/:userName',
}

type RouterConfig = {
  href?: RouterHref;
  component: React.FC;
  exact?: boolean;
};

const routerConfig: RouterConfig[] = [
  {
    href: RouterHref.Main,
    component: PagesMain,
  },
  {
    href: RouterHref.Devices,
    component: PagesDevices,
  },
  {
    href: RouterHref.Authorization,
    component: PagesAuthorization,
  },
  {
    href: RouterHref.About,
    component: PagesAbout,
  },
  {
    href: RouterHref.UiPreview,
    component: PagesUiPreview,
  },
  {
    href: RouterHref.ProfileDetail,
    component: PagesProfileDetail,
  },
];

export { routerConfig, RouterHref };
