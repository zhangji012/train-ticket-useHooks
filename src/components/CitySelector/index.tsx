import React, { useState, useMemo, memo, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import './index.less';

interface IProps {
  show: boolean;
  cityData: {
    [propName: string]: any;
  };
  isLoading: boolean;
  onBack: () => void;
  fetchCityData: () => void;
  onSelect: () => void;
}
export default function Header(props: IProps) {
  const { show, cityData, isLoading, onBack, fetchCityData, onSelect } = props;
  const [searchKey, setSearchKey] = useState('');
  // trim() 方法会从一个字符串的两端删除空白字符
  const key = useMemo(() => searchKey.trim(), [searchKey]);

  useEffect(
    () => {
      if (!show) {
        return;
      }

      fetchCityData();
    },
    [show],
  );
  // Element.scrollIntoView() 方法让当前的元素滚动到浏览器窗口的可视区域内
  // 这边样式有些问题，比如跳到D时
  const toAlpha = useCallback(alpha => {
    document.querySelector(`[data-cate='${alpha}']`).scrollIntoView();
  }, []);
  const outputCitySections = () => {
    if (isLoading) {
      return <div>loading</div>;
    }

    if (cityData) {
      return <div>cityData</div>;
    }

    return <div>error</div>;
  };

  return (
    <div className={classnames('city-selector', { hidden: !show })}>
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
          <svg width="42" height="42">
            <polyline points="25,13 16,21 25,29" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            value={searchKey}
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <i
          onClick={() => setSearchKey('')}
          className={classnames('search-clean', {
            hidden: key.length === 0,
          })}
        >
          &#xf063;
        </i>
        {outputCitySections()}
      </div>
    </div>
  );
}
