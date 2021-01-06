import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import styles from './UiDropdown.scss';

type HorizontalPosition = 'left' | 'middle' | 'right';
type VerticalPosition = 'top' | 'bottom';

const getModifierDropDown = (
  position: HorizontalPosition | VerticalPosition
) => {
  return styles[`uiDropdown__container_${position}Side`];
};

interface Props {
  children: React.ReactNode;
  buttonChildren: React.ReactNode;
  buttonClassName?: string;
  className?: string;
  horizontalPosition?: HorizontalPosition;
  verticalPosition?: VerticalPosition;
}

const UiDropdown: React.FC<Props> = ({
  children,
  buttonChildren,
  buttonClassName,
  className,
  horizontalPosition = 'left',
  verticalPosition = 'bottom',
}) => {
  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const toggleDropdownOpened = () => setDropdownOpened((value) => !value);

  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const clickOutsideElement = ({ target }: MouseEvent | TouchEvent) => {
    const { current: dropdownEl } = dropDownRef;
    const { current: buttonEl } = buttonRef;

    if (
      !dropdownEl?.contains(target as HTMLElement) &&
      !buttonEl?.contains(target as HTMLElement)
    ) {
      setDropdownOpened(false);
    }
  };

  const subscribeListeners = () => {
    if (isDropdownOpened) {
      document.addEventListener('mousedown', clickOutsideElement);
      document.addEventListener('touchstart', clickOutsideElement);
    }
  };

  const unSubscribeListeners = () => {
    if (isDropdownOpened) {
      document.removeEventListener('mousedown', clickOutsideElement);
      document.removeEventListener('touchstart', clickOutsideElement);
    }
  };

  useEffect(() => {
    subscribeListeners();

    return () => {
      unSubscribeListeners();
    };
  }, [isDropdownOpened]);

  return (
    <div className={styles.uiDropdown}>
      <button
        ref={buttonRef}
        className={classNames(styles.uiDropdown__button, buttonClassName)}
        type="button"
        onClick={toggleDropdownOpened}
      >
        {buttonChildren}
      </button>
      <div
        ref={dropDownRef}
        className={classNames(
          styles.uiDropdown__container,
          className,
          getModifierDropDown(horizontalPosition),
          getModifierDropDown(verticalPosition),
          {
            [styles.uiDropdown__container_opened]: isDropdownOpened,
          }
        )}
      >
        <div className={styles.uiDropdown__wrapper}>{children}</div>
      </div>
    </div>
  );
};

export { UiDropdown };
