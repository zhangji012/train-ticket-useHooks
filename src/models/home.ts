// import { queryGetBase, querySetBase } from '@/services/resume'

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

  effects: {},

  reducers: {
    save(state: IHomeStore, { payload }: IEffectsAction) {
      return { ...state, ...payload };
    },
    exchangeFromTo(state: IHomeStore) {
      const payload = {
        from: state.to,
        to: state.from,
      };
      return { ...state, ...payload };
    },
  },
};

export default home;
