import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { Authorization } from '~/components/base/authorization/Authorization';

const PagesAuthorization: React.FC = () => {
  return (
    <LayoutsMain>
      <Authorization />
    </LayoutsMain>
  );
};

export { PagesAuthorization };
