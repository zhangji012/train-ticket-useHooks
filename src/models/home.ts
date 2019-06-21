// import { queryGetBase, querySetBase } from '@/services/resume'

const home = {
  namespace: 'home',

  state: {
    from: '北京',
    to: '上海',

  },

  effects: {

  },

  reducers: {
    save(state: IHomeStore, { payload }) {
      return { ...state, ...payload }
    },
    exchangeFromTo(state: IHomeStore) {
      const payload = {
        from: state.to,
        to: state.from
      }
      return { ...state, ...payload }
    },

  },
}

export default home
