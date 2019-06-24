import React, { useCallback } from 'react';
import Header from '@/components/Header';
import classnames from 'classnames';
import { onSstType } from '@/pages/home/type';
import Month from './Month';
import './index.less';

interface IProps {
  show: boolean;
  onSelect: (day: number) => void;
  onSet: (obj: onSstType) => void;
}
export default function DateSelector(props: IProps) {
  const { show, onSelect, onSet } = props;
  const handleClick = useCallback(() => {
    onSet({
      isDateSelectorVisible: false
    })
  }, [])

  // 设置为第一天0时0分0秒
  const now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  now.setDate(1);

  const monthSequence = [now.getTime()];

  // 显示当前月
  now.setMonth(now.getMonth() + 1);
  monthSequence.push(now.getTime());

  // 显示下个月
  now.setMonth(now.getMonth() + 1);
  monthSequence.push(now.getTime());
  console.log('monthSequence', monthSequence);
  return (
    <div className={classnames('date-selector', { hidden: !show })}>
      <Header title="日期选择" onBack={handleClick} />
      <div className="date-selector-tables">
        {monthSequence.map(month => {
          return <Month key={month} onSelect={onSelect} startingTimeInMonth={month} />;
        })}
      </div>
    </div>
  );
}
