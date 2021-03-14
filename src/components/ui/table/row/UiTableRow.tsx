import React, { useState } from 'react';
import classNames from 'classnames';

import { cellFormat } from '~/helpers/format';

import styles from './UiTableRow.scss';

type CellContent = string | number | null | undefined;

type OnSelectHandler =
  | React.MouseEventHandler<HTMLTableRowElement>
  | React.KeyboardEventHandler<HTMLTableRowElement>;

interface Props {
  className?: string;
  cellsContent?: CellContent[];
  onSelect?: OnSelectHandler;
}

const isEventEnter = (key: string) => key === 'Enter';

const UiTableRow: React.FC<Props> = ({
  children,
  className,
  cellsContent,
  onSelect,
}) => {
  if (children == null && !Array.isArray(cellsContent)) {
    throw new Error('Cells content undefined');
  }

  const [isActive, setIsActive] = useState(false);

  const trModClicked = onSelect ? styles.uiTableRow_clicked : undefined;

  const onClickHandler: React.MouseEventHandler<HTMLTableRowElement> = (
    event
  ) => {
    if (onSelect) {
      (onSelect as React.MouseEventHandler<HTMLTableRowElement>)(event);
    }
  };

  const onKeyPressHandler: React.KeyboardEventHandler<HTMLTableRowElement> = (
    event
  ) => {
    if (onSelect && isEventEnter(event.key)) {
      (onSelect as React.KeyboardEventHandler<HTMLTableRowElement>)(event);
    }
  };

  const setActive: React.KeyboardEventHandler<HTMLTableRowElement> = ({
    key,
  }) => {
    if (isEventEnter(key)) {
      setIsActive(true);
    }
  };
  const removeActive: React.KeyboardEventHandler<HTMLTableRowElement> = ({
    key,
  }) => {
    if (isEventEnter(key)) {
      setIsActive(false);
    }
  };

  const cellsEls =
    children ||
    cellsContent?.map((content, index) => (
      // Since the order of the elements will not change, a unique key is not required.
      // eslint-disable-next-line react/no-array-index-key
      <td key={index} className={styles.uiTableRow__cell}>
        {cellFormat(content)}
      </td>
    ));

  return (
    <tr
      tabIndex={0}
      className={classNames(
        styles.uiTableRow,
        trModClicked,
        { [styles.uiTableRow_active]: isActive },
        className
      )}
      onClick={onClickHandler}
      onKeyPress={onKeyPressHandler}
      onKeyDown={setActive}
      onKeyUp={removeActive}
    >
      {cellsEls}
    </tr>
  );
};

export { UiTableRow };
