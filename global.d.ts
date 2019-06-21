// 全部配置
interface IResponse<T> {
  status: number
  data: T
  msg: string
}

/**
 * dva异步方法调用
 */
type IDispatch = (object: { type: string; payload?: object; callback?: (res: any) => void }) => any

interface IEffectsAction {
  //参数
  payload?: any
  //回调
  callback?: (res?: any | boolean) => void
}
interface IJson {
  [key: string]: any
}

/**
 * 全局状态
 */
interface IStore {
  loading: {
    effects: string[]
  }
  home: IHomeStore
}

interface IHomeStore {
  from: string
  to: string
}
