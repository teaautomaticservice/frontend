import React from 'react';
import classNames from 'classnames';

import styles from './UiSection.scss';
import { UiSectionContainer } from './container/UiSectionContainer';

type Composition = {
  Container: typeof UiSectionContainer;
};

interface Props {
  className?: string;
}

const UiSection: React.FC<Props> & Composition = ({ className, children }) => (
  <div className={classNames(styles.uiSection, className)}>{children}</div>
);

UiSection.Container = UiSectionContainer;

export { UiSection };
