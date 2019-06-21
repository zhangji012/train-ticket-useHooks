import React, { useMemo, useCallback } from 'react';
import { h0 } from '@/utils/tool';
import { onSstType } from '@/pages/home/type';

import dayjs from 'dayjs';
import './index.less';

interface IProps {
  time: number;
  onSet: (obj: onSstType) => void;
}
export default function DepartDate(props: IProps) {
  const { time, onSet } = props;
  // 这边目的time可以各种变化，但是他所代表的天是同一天
  const h0OfDepart = h0(time);
  // console.log('h0OfDepart', h0OfDepart)
  // 转化为时间轴
  const departDate = new Date(h0OfDepart);
  const handleClick = useCallback(() => {
    onSet({
      isDateSelectorVisible: true
    })
  }, [])

  const departDateString = useMemo(
    () => {
      return dayjs(h0OfDepart).format('YYYY-MM-DD');
    },
    [h0OfDepart],
  );
  const isToday = h0OfDepart === h0();
  const weekString =
    '周' +
    ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] +
    (isToday ? '(今天)' : '');
  return (
    <div className="depart-date" onClick={handleClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className="depart-week">{weekString}</span>
    </div>
  );
}
