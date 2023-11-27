export interface SwipeCardProps extends CardEvents {
  data: CardData[]
  withActionButtons?: boolean
  dislikeButton?: React.JSX.Element
  likeButton?: React.JSX.Element
}

export interface CardData {
  id: string | number
  src: string
  header?: React.JSX.Element
  content?: React.JSX.Element
}

export type CardEvent = (element: HTMLDivElement, id?: CardData['id'], action?: SwipeAction) => void

export interface CardEvents {
  onLikeSwipe: CardEvent
  onDislikeSwipe: CardEvent
  onDismiss?: () => void
}

export enum SwipeDirection {
  LEFT = -1,
  RIGHT = 1,
}

export enum SwipeAction {
  LIKE = 'like',
  DISLIKE = 'dislike',
}
