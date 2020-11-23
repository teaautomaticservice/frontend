import React from 'react';

import { theme } from '~/theme';
import { LayoutsMain } from '~/components/layouts/main/Main';

import styles from './PagesUi.scss';

const { dynamicColors, backgroundColors, textColors, statusColors } = theme;

const getColorsEls = (colors: Record<string, string>) => {
  return Object.values(colors).map((color) => (
    <div
      key={color}
      className={styles.pagesUi__sectionItem}
      style={{ backgroundColor: color }}
    />
  ));
};

const getColorsSection = (sectionName: string, childrens: JSX.Element[]) => (
  <div className={styles.pagesUi__section}>
    <div className={styles.pagesUi__sectionHeading}>
      <h2>{sectionName}</h2>
    </div>
    <div className={styles.pagesUi__sectionContent}>{childrens}</div>
  </div>
);

const PagesUi: React.FC = () => {
  const dynamicColorsEls = getColorsEls(dynamicColors);
  const backgroundColorsEls = getColorsEls(backgroundColors);
  const textColorsEls = getColorsEls(textColors);
  const statusColorsEls = getColorsEls(statusColors);

  return (
    <LayoutsMain>
      <div className={styles.pagesUi}>
        {getColorsSection('dynamicColors', dynamicColorsEls)}
        {getColorsSection('backgroundColors', backgroundColorsEls)}
        {getColorsSection('textColors', textColorsEls)}
        {getColorsSection('statusColors', statusColorsEls)}
      </div>
    </LayoutsMain>
  );
};

export { PagesUi };
