import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { RouterHref } from '~/router/config';

import styles from './UiLink.scss';

type Appearance = 'label' | 'card';

const modifierMap: Record<Appearance, string> = {
  label: styles.uiLink_label,
  card: styles.uiLink_card,
};

interface Props {
  to: RouterHref | string;
  label?: string;
  className?: string;
  appearance?: Appearance;
  isCardActive?: boolean;
}

const UiLink: React.FC<Props> = ({
  to,
  label,
  children,
  className,
  appearance = 'label',
  isCardActive = false,
}) => {
  const isCard = appearance === 'card';

  const labelEl = isCard ? (
    <span>{label}</span>
  ) : (
    <span className="font-caption">{label}</span>
  );

  const content = label ? labelEl : children;

  return (
    <Link
      to={to}
      className={classNames(
        styles.uiLink,
        modifierMap[appearance],
        { [styles.uiLink_active]: isCardActive },
        className
      )}
    >
      {content}
    </Link>
  );
};

export { UiLink };
