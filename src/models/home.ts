import { queryHomeCityData } from '@/services/home';

const home = {
  namespace: 'home',

  state: {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false,
  },

  effects: {
    *fetch(action: IEffectsAction, { call, put }) {
      // 本地有数据就用本地的
      const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');

      if (Date.now() < cache.expires) {
        yield put({
          type: 'save',
          payload: cache.data,
        });
        return;
      }

      const { payload } = action;
      const response = yield call(queryHomeCityData, payload);
      const data = {
        cityData: response,
      };
      // 写入缓存，设置有效期
      localStorage.setItem(
        'city_data_cache',
        JSON.stringify({
          expires: Date.now() + 60 * 1000,
          data: response,
        }),
      );
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state: IHomeStore, { payload }: IEffectsAction) {
      return { ...state, ...payload };
    },
  },
};

export default home;
