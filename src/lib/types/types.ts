export interface SwipeCardProps extends CardEvents {
  data: CardData[]
  withActionButtons?: boolean
  dislikeButton?: React.JSX.Element
  likeButton?: React.JSX.Element
}

export interface CardData {
  id: string | number
  src: string
  meta: Record<string, unknown> | Array<unknown>
  header?: React.JSX.Element
  content?: React.JSX.Element
}

export type CardEvent = (
  element: HTMLDivElement,
  meta: CardData['meta'],
  id: CardData['id'],
  action?: SwipeAction,
) => void

export interface CardEvents {
  onLikeSwipe: CardEvent
  onDislikeSwipe: CardEvent
  onFinish?: (status: string) => void
  onDismiss?: () => void
}

export enum SwipeDirection {
  LEFT = -1,
  RIGHT = 1,
}

export enum SwipeAction {
  LIKE = 'like',
  DISLIKE = 'dislike',
  FINISH = 'finish',
}
