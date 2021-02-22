import React from 'react';

import { RouterHref } from '~/router/config';
import { UiLink } from '~/components/ui/link/UiLink';

import styles from './Toolbar.scss';

type CardData = {
  to: RouterHref | string;
  label: string;
};

const cardsData: CardData[] = [
  {
    to: '/',
    label: 'Добавить',
  },
  {
    to: '/devices',
    label: 'Устройства',
  },
  {
    to: '#',
    label: 'Клиенты',
  },
  {
    to: '#',
    label: 'Сотрудники',
  },
];

const Toolbar: React.FC = () => {
  const currentHref = window.location.pathname;

  const cardsEls = cardsData.map(({ to, label }) => {
    const isActive = to === currentHref;

    return (
      <UiLink
        key={label}
        appearance="card"
        to={to}
        className={styles.toolbar__tab}
        label={label}
        isCardActive={isActive}
      />
    );
  });

  return <div className={styles.toolbar}>{cardsEls}</div>;
};

export { Toolbar };
