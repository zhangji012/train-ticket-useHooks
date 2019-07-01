import React, { useCallback } from 'react';
import classnames from 'classnames';
import { onSstType } from '@/pages/home/type';
import './index.less';

interface IProps {
  highSpeed: boolean;
  onSet: (obj: onSstType) => void;
}
export default function Journey(props: IProps) {
  const { highSpeed, onSet } = props;
  const handleClick = useCallback(() => {
    onSet({
      highSpeed: !highSpeed,
    });
  }, [highSpeed]);
  return (
    <div className="high-speed">
      <div className="high-speed-label">只看高铁/动车</div>
      <div className="high-speed-switch" onClick={handleClick}>
        <div
          className={classnames('high-speed-track', {
            checked: highSpeed,
          })}
        >
          <span
            className={classnames('high-speed-handle', {
              checked: highSpeed,
            })}
          />
        </div>
      </div>
    </div>
  );
}
