import React from 'react';
import classNames from 'classnames';

import PersonSVG from '~/components/svg/person.svg';

import styles from './UiAvatar.scss';

type AvatarSize = '0' | '1' | '2' | '3' | '4' | '5' | '6';

const getUiAvatarSizeModifier = (size: AvatarSize) =>
  `${styles.uiAvatar}_size-${size}`;

interface Props {
  size?: AvatarSize;
}

const UiAvatar: React.FC<Props> = ({ size = '0' }) => {
  return (
    <div className={classNames(styles.uiAvatar, getUiAvatarSizeModifier(size))}>
      <PersonSVG />
    </div>
  );
};

export { UiAvatar };
