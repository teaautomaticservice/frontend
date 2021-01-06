import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { Toolbar } from '~/components/core/toolbar/Toolbar';
import { TakeDevice } from '~/components/base/take-device/TakeDevice';

const PagesMain: React.FC = () => (
  <LayoutsMain>
    <Toolbar />
    <TakeDevice />
  </LayoutsMain>
);

export { PagesMain };
