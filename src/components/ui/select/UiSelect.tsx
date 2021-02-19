import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import classNames from 'classnames';

import ArrowDropDownSVG from '~/components/svg/arrow-drop-down.svg';

import styles from './UiSelect.scss';
import { UiSelectOption } from './option/UiSelectOption';

export interface Props {
  name: string;
  className?: string;
}

type ForwardRef = ForwardRefExoticComponent<
  PropsWithoutRef<PropsWithChildren<Props>> & RefAttributes<HTMLSelectElement>
>;

type Composition = {
  Option: typeof UiSelectOption;
};

type UiSelectComposition = ForwardRef & Composition;

const UiSelectComponent: ForwardRef = forwardRef(
  ({ className, name, children }, ref) => {
    return (
      <div className={classNames(styles.uiSelect, className)}>
        <select className={styles.uiSelect__select} ref={ref} name={name}>
          {children}
        </select>
        <ArrowDropDownSVG className={styles.uiSelect__dropDownIcon} />
      </div>
    );
  }
);

const UiSelect = UiSelectComponent as UiSelectComposition;
UiSelect.Option = UiSelectOption;

export { UiSelect };
