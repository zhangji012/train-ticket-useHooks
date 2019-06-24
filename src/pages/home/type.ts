export type StoreState = {
  home: IHomeStore
}

export type StoreDispatch = {
  saveData: (params:any) => void
  getCityData: () => void

}

export type OwnProps = {}

export type Props =  StoreState & StoreDispatch & OwnProps

export type onSstType = {
  [propName: string]: any
}
