import React from 'react';
import Day from './Day';
import './index.less';

interface IProps {
  days: any[];
  onSelect: (day: number) => void;
}
export default function DateSelector(props: IProps) {
  const { days, onSelect } = props;

  return (
    <tr className="date-table-days">
      {days.map((day, idx) => {
        return <Day key={idx} day={day} onSelect={onSelect} />;
      })}
    </tr>
  );
}
