import React from 'react';
import switchImg from '@/assets/switch.svg';
import './index.less';

interface IProps {
  from: string;
  to: string;
  exchangeFromTo: () => void;
  showCitySelector: (select: boolean) => void;
}
export default function Journey(props: IProps) {
  const { from, to, exchangeFromTo, showCitySelector } = props;
  console.log('from', from)
  return (
    <div className="journey">
      <div className="journey-station" onClick={() => showCitySelector(true)}>
        <input
          type="text"
          readOnly={true}
          name="from"
          value={from}
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div className="journey-station" onClick={() => showCitySelector(false)}>
        <input type="text" readOnly={true} name="to" value={to} className="journey-input journey-to" />
      </div>
    </div>
  );
}
