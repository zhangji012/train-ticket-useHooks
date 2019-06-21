export type StoreState = {
  home: IHomeStore
}

export type StoreDispatch = {
  exchangeFromTo: (st: any) => void
}

export type OwnProps = {}

export type Props =  StoreState & StoreDispatch & OwnProps
