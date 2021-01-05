import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { ProfileDetail } from '~/components/base/profile-detail/ProfileDetail';

const PagesProfileDetail: React.FC = () => (
  <LayoutsMain>
    <ProfileDetail />
  </LayoutsMain>
);

export { PagesProfileDetail };
