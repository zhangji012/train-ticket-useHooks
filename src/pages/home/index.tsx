import React, { useCallback, useMemo } from 'react';
import { connect } from 'dva';
import { Props, onSstType } from '@/pages/home/type';
import Header from '@/components/Header';
import Journey from './components/Journey';
import DepartDate from './components/DepartDate';
import DateSelector from './components/DateSelector';


import styles from './index.less';

function App(props: Props) {
  const {
    from,
    to,
    // isCitySelectorVisible,
    isDateSelectorVisible,
    // cityData,
    // isLoadingCityData,
    // highSpeed,
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
    props.saveData(obj)
  }, [])

  const onSelectDate = useCallback((day) => {
    console.log('onSelectDate', day);
  }, []);


  return (
    <div>
      <div className={styles['header-wrapper']}>
        <Header title="火车票" onBack={onBack} />
      </div>
      <div className={styles.form}>
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} onSet={onSst} />
        <DateSelector show={isDateSelectorVisible} onSelect={onSelectDate} onSet={onSst} />
      </div>
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
