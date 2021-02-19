import React, {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import classNames from 'classnames';

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
        <select ref={ref} name={name}>
          {children}
        </select>
      </div>
    );
  }
);

const UiSelect = UiSelectComponent as UiSelectComposition;
UiSelect.Option = UiSelectOption;

export { UiSelect };
