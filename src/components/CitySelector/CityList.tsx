import React, { memo } from 'react';
import CitySection from './CitySection';

import './index.less';

// 26个字母组件
interface IProps2 {
  alpha: string;
  onClick: (name: string) => void;
}
const AlphaIndex = memo(function AlphaIndex(props: IProps2) {
  const { alpha, onClick } = props;

  return (
    <i className="city-index-item" onClick={() => onClick(alpha)}>
      {alpha}
    </i>
  );
});

interface IProps {
  sections: [
    {
      title: string;
      citys: [
        {
          name: string;
        }
      ];
    }
  ];
  onSelect: (name: string) => void;
  toAlpha: (name: string) => void;
}

// 26个字母通过assc码获取
const alphabet = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index);
});

const CityList = memo(function CityList(props: IProps) {
  const { sections, toAlpha, onSelect } = props;

  return (
    <div className="city-list">
      <div className="city-cate">
        {sections.map(section => {
          return (
            <CitySection
              key={section.title}
              title={section.title}
              cities={section.citys}
              onSelect={onSelect}
            />
          );
        })}
      </div>
      <div className="city-index">
        {alphabet.map(alpha => {
          return <AlphaIndex key={alpha} alpha={alpha} onClick={toAlpha} />;
        })}
      </div>
    </div>
  );
});

export default CityList;
