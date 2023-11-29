export interface SwiperProps extends CardEvents {
  id: CardId
  meta: CardMetaData
  element: HTMLDivElement
}

export interface CardSwiperProps extends CardEvents {
  data: CardData[]
  likeButton?: React.JSX.Element
  dislikeButton?: React.JSX.Element
  withActionButtons?: boolean
}

export interface CardEvents {
  onFinish?: (status: SwipeAction.FINISHED) => void
  onDismiss?: CardEvent
}

export interface CardData {
  id: CardId
  src: string
  meta: CardMetaData
  header?: React.JSX.Element
  content?: React.JSX.Element
}

export type CardId = string | number
export type CardEvent = (element: HTMLDivElement, meta: CardMetaData, id: CardId, action: SwipeAction) => void
export type CardMetaData = Record<string, unknown> | Array<unknown>

export enum SwipeDirection {
  LEFT = -1,
  RIGHT = 1,
}

export enum SwipeAction {
  LIKE = 'like',
  DISLIKE = 'dislike',
  FINISHED = 'finished',
}
