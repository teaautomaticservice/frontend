import React from 'react';

import { theme } from '~/theme';

import styles from './UiPreview.scss';

const { coreColors, backgroundColors, textColors, statusColors } = theme;

const getColorsEls = (colors: Record<string, string>) => {
  return Object.values(colors).map((color) => (
    <div
      key={color}
      className={styles.uiPreview__sectionItem}
      style={{ backgroundColor: color }}
    />
  ));
};

const getColorsSection = (sectionName: string, childrens: JSX.Element[]) => (
  <div className={styles.uiPreview__section}>
    <div className={styles.uiPreview__sectionHeading}>
      <h2>{sectionName}</h2>
    </div>
    <div className={styles.uiPreview__sectionContent}>{childrens}</div>
  </div>
);

const UiPreview: React.FC = () => {
  const coreColorsEls = getColorsEls(coreColors);
  const backgroundColorsEls = getColorsEls(backgroundColors);
  const textColorsEls = getColorsEls(textColors);
  const statusColorsEls = getColorsEls(statusColors);

  return (
    <div className={styles.uiPreview}>
      {getColorsSection('coreColors', coreColorsEls)}
      {getColorsSection('backgroundColors', backgroundColorsEls)}
      {getColorsSection('textColors', textColorsEls)}
      {getColorsSection('statusColors', statusColorsEls)}
    </div>
  );
};

export { UiPreview };
