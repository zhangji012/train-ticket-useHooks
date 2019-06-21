import React, { useCallback, useMemo } from 'react';
import { connect } from 'dva';
import { Props } from '@/pages/home/type';
import Header from '@/components/Header';
import Journey from './components/Journey';

import styles from './index.less';

function App(props: Props) {
  const {
    from,
    to,
    // isCitySelectorVisible,
    // isDateSelectorVisible,
    // cityData,
    // isLoadingCityData,
    // highSpeed,
    // dispatch,
    // departDate,
  } = props.home;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const cbs = useMemo(() => {
    return {
      exchangeFromTo: () => {},
      showCitySelector: () => {},
    };
  }, []);

  return (
    <div>
      <div className={styles['header-wrapper']}>
        <Header title="火车票" onBack={onBack} />
      </div>
      <div className={styles.form}>
        <Journey from={from} to={to} {...cbs} />
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
