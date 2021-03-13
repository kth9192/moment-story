import React, { useState } from 'react';
import '../style/list.scss';

export interface ListItemProps {
  handleCheck?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export const MemoListItem = ({ handleCheck }: ListItemProps) => {
  const [isOn, setOn] = useState<boolean>(false);

  return (
    <li className="memo__li" onClick={() => setOn(!isOn)}>
      테스트
      <input
        type="checkbox"
        name="test"
        className="li__checkbox"
        checked={isOn}
      />
    </li>
  );
};
