import React, { useCallback } from 'react';
import switchImg from '@/assets/switch.svg';
import { onSstType } from '@/pages/home/type';
import './index.less';

interface IProps {
  from: string;
  to: string;
  onSet: (obj: onSstType) => void;
}
export default function Journey(props: IProps) {
  const { from, to, onSet } = props;
  const handleClick = useCallback(() => {
    onSet({
      isCitySelectorVisible: true,
    });
  }, []);
  const handleExchangeFromTo = useCallback(() => {
    onSet({
      from: to,
      to: from,
    });
  }, []);
  return (
    <div className="journey">
      <div className="journey-station" onClick={() => handleClick()}>
        <input
          type="text"
          readOnly={true}
          name="from"
          value={from}
          className="journey-input journey-from"
        />
      </div>
      <div className="journey-switch" onClick={() => handleExchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div className="journey-station" onClick={() => handleClick()}>
        <input
          type="text"
          readOnly={true}
          name="to"
          value={to}
          className="journey-input journey-to"
        />
      </div>
    </div>
  );
}
