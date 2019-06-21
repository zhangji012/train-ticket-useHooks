import React from 'react';
import classnames from 'classnames';
import { h0 } from '@/utils/tool';
import './index.less';

interface IProps {
  day: number;
  onSelect: (day: number) => void;
}
export default function DateSelector(props: IProps) {
  const { day, onSelect } = props;
  if (!day) {
    return <td className="null" />;
  }

  const classes = [];

  const now = h0();

  if (day < now) {
    classes.push('disabled');
  }

  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push('weekend');
  }

  const dateString = now === day ? '今天' : new Date(day).getDate();

  return (
    <td className={classnames(classes)} onClick={() => onSelect(day)}>
      {dateString}
    </td>
  );
}
