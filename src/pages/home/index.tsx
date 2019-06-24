import React, { useCallback, useMemo } from 'react';
import { connect } from 'dva';
import { Props, onSstType } from '@/pages/home/type';
import Header from '@/components/Header';
import Journey from './components/Journey';
import DepartDate from './components/DepartDate';
import DateSelector from './components/DateSelector';
import HighSpeed from './components/HighSpeed';

import { h0 } from '@/utils/tool';
import styles from './index.less';

function App(props: Props) {
  const {
    from,
    to,
    // isCitySelectorVisible,
    isDateSelectorVisible,
    // cityData,
    // isLoadingCityData,
    highSpeed,
    // dispatch,
    departDate,
  } = props.home;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return {
      exchangeFromTo: () => {
        props.exchangeFromTo();
      },
      showCitySelector: () => {},
    };
  }, []);

  const onSst = useCallback((obj: onSstType) => {
    props.saveData(obj);
  }, []);
  // todo 如果useMemo返回的是一个函数，可以直接使用useCallback简写,但是理解还是不深
  const onSelectDate = useCallback(day => {
    if (!day) {
      return;
    }

    if (day < h0()) {
      return;
    }
    props.saveData({
      isDateSelectorVisible: false,
      departDate: day,
    });
  }, []);

  return (
    <div>
      <div className={styles['header-wrapper']}>
        <Header title="火车票" onBack={onBack} />
      </div>
      <div className={styles.form}>
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} onSet={onSst} />
        <HighSpeed highSpeed={highSpeed} onSet={onSst} />
      </div>
      <DateSelector show={isDateSelectorVisible} onSelect={onSelectDate} onSet={onSst} />
    </div>
  );
}

const mapStateToProps = (state: IStore) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
  exchangeFromTo: () =>
    dispatch({
      type: 'home/exchangeFromTo',
    }),
  saveData: (params: any) =>
    dispatch({
      type: 'home/save',
      payload: params,
    }),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
