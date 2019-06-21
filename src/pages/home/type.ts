export type StoreState = {
  home: IHomeStore
}

export type StoreDispatch = {
  exchangeFromTo: () => void
  saveData: (params:any) => void
}

export type OwnProps = {}

export type Props =  StoreState & StoreDispatch & OwnProps
