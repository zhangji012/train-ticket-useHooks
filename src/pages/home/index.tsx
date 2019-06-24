import React, { useCallback, useMemo, useEffect } from 'react';
import { connect } from 'dva';
import { Props, onSstType } from '@/pages/home/type';
import Header from '@/components/Header';
import Journey from './components/Journey';
import DepartDate from './components/DepartDate';
import DateSelector from './components/DateSelector';
import HighSpeed from './components/HighSpeed';
import CitySelector from '@/components/CitySelector';

import { h0 } from '@/utils/tool';
import styles from './index.less';

function App(props: Props) {
  const {
    from,
    to,
    isCitySelectorVisible,
    isDateSelectorVisible,
    cityData,
    isLoadingCityData,
    highSpeed,
    departDate,
  } = props.home;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  // const cbs = useMemo(() => {
  //   return {
  //     exchangeFromTo: () => {
  //       props.exchangeFromTo();
  //     },
  //     showCitySelector: () => {

  //     },
  //   };
  // }, []);

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
        <Journey from={from} to={to} onSet={onSst} />
        <DepartDate time={departDate} onSet={onSst} />
        <HighSpeed highSpeed={highSpeed} onSet={onSst} />
      </div>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        fetchCityData={props.getCityData}
        onSet={onSst}
      />
      <DateSelector show={isDateSelectorVisible} onSelect={onSelectDate} onSet={onSst} />
    </div>
  );
}
// todo 这边有警告，暂时搞其他的，后面看下
const mapStateToProps = (state: IStore) => ({
  home: state.home,
  isLoadingCityData: state.loading.effects['home/fetch'],
});

const mapDispatchToProps = (dispatch: IDispatch) => ({
  getCityData: () =>
    dispatch({
      type: 'home/fetch',
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
