import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { About } from '~/components/base/about/About';

const PagesAbout: React.FC = () => {
  return (
    <LayoutsMain>
      <About />
    </LayoutsMain>
  );
};

export { PagesAbout };
