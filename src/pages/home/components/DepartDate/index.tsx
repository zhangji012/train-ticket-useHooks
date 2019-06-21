import React, { useMemo } from 'react';
import { h0 } from '@/utils/tool';
import dayjs from 'dayjs';
import './index.less';

interface IProps {
  time: number;
  onClick: () => void;
}
export default function DepartDate(props: IProps) {
  const { time, onClick } = props;
  // 这边目的time可以各种变化，但是他所代表的天是同一天
  const h0OfDepart = h0(time);
  // console.log('h0OfDepart', h0OfDepart)
  // 转化为时间轴
  const departDate = new Date(h0OfDepart);
  // console.log('departDate', Date.now())
  // console.log('departDate', typeof Date.now())


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
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString} <span className="depart-week">{weekString}</span>
    </div>
  );
}
