import React from 'react';
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

const UiTableRow: React.FC<Props> = ({
  children,
  className,
  cellsContent,
  onSelect,
}) => {
  if (children == null && !Array.isArray(cellsContent)) {
    throw new Error('Cells content undefined');
  }

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
    if (onSelect && event.key === 'Enter') {
      (onSelect as React.KeyboardEventHandler<HTMLTableRowElement>)(event);
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
      className={classNames(styles.uiTableRow, trModClicked, className)}
      onClick={onClickHandler}
      onKeyPress={onKeyPressHandler}
    >
      {cellsEls}
    </tr>
  );
};

export { UiTableRow };
