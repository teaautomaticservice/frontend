import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { Toolbar } from '~/components/core/toolbar/Toolbar';
import { Devices } from '~/components/base/devices/Devices';

const PagesDevices: React.FC = () => (
  <LayoutsMain>
    <Toolbar />
    <Devices />
  </LayoutsMain>
);

export { PagesDevices };
