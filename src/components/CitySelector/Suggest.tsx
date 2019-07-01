import React, { memo, useState, useEffect, useMemo } from 'react';
import { queryHomeSearch } from '@/services/home';

import './index.less';

// 搜索列表
interface IProps2 {
  name: string;
  onClick: (name: string) => void;
}
const SuggestItem = memo(function SuggestItem(props: IProps2) {
  const { name, onClick } = props;

  return (
    <li className="city-suggest-li" onClick={() => onClick(name)}>
      {name}
    </li>
  );
});

interface IProps {
  searchKey: string;
  onSelect: (name: string) => void;
}

const Suggest = memo(function Suggest(props: IProps) {
  const { searchKey, onSelect } = props;
  const [result, setResult] = useState([]);
  useEffect(
    () => {
      queryHomeSearch({
        key: encodeURIComponent(searchKey),
      }).then(data => {
        const { result, searchKey: sKey } = data;
        // 这步挺好的，防止旧的返回被取出来，谁先返回没法确认，同时这边可以使用节流
        if (sKey === searchKey) {
          setResult(result);
        }
      });
    },
    [searchKey],
  );
  // 他这边没有就显示关键词
  const fallBackResult = useMemo(
    () => {
      if (!result.length) {
        return [
          {
            display: searchKey,
          },
        ];
      }

      return result;
    },
    [result, searchKey],
  );

  return (
    <div className="city-suggest">
      <ul className="city-suggest-ul">
        {fallBackResult.map(item => {
          return <SuggestItem key={item.display} name={item.display} onClick={onSelect} />;
        })}
      </ul>
    </div>
  );
});

export default Suggest;
