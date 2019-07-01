import React, { memo } from 'react';
import './index.less';

interface IProps {
  name: string;
  key: string;
  onSelect: (name: string) => void;
}

const CityItem = memo(function CityItem(props: IProps) {
  const { name, onSelect } = props;

  return (
    <li className="city-li" onClick={() => onSelect(name)}>
      {name}
    </li>
  );
});

interface IProps2 {
  title: string;
  cities: [
    {
      name: string;
    }
  ];
  onSelect: (name: string) => void;
}

const CitySection = memo(function CitySection(props: IProps2) {
  const { title, cities, onSelect } = props;

  return (
    <ul className="city-ul">
      <li className="city-li" key="title" data-cate={title}>
        {title}
      </li>
      { cities && cities.length && cities.map(city => (
        <CityItem key={city.name} name={city.name} onSelect={onSelect} />
      ))}
    </ul>
  );
});

export default CitySection;
