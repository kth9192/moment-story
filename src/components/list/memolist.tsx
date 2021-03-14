import { MemoListItem } from 'components/list/listItem';
import React from 'react';

const tmp = [{ task: 'test1' }, { task: 'test2' }, { task: 'test3' }];

function Memolist() {
  return (
    <div className="memo">
      {tmp.map((item) => (
        <MemoListItem task={item.task} />
      ))}
    </div>
  );
}

export default Memolist;
