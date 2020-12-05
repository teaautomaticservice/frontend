import React from 'react';

import { LayoutsMain } from '~/components/layouts/main/LayoutsMain';
import { UiPreview } from '~/components/base/ui-preview/UiPreview';

const PagesUiPreview: React.FC = () => (
  <LayoutsMain>
    <UiPreview />
  </LayoutsMain>
);

export { PagesUiPreview };
