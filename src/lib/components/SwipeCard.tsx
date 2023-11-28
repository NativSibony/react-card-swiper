import '../main.css'

import { useMemo, useState } from 'react'
import { SwiperRightActionButton } from './SwiperRightActionButton'
import { SwiperLeftActionButton } from './SwiperLeftActionButton'
import { useSwipeCard } from '../hooks/useSwipeCard'
import { SwipeCardProps, SwipeDirection } from '../types/types'

export const SwipeCard = ({
  data,
  onLikeSwipe,
  onDislikeSwipe,
  onDismiss,
  likeButton,
  dislikeButton,
  withActionButtons = false,
}: SwipeCardProps) => {
  const [dynamicData, setDynamicData] = useState(data)

  const { handleActionButtonClick, handleNewCard } = useSwipeCard({
    onDislikeSwipe,
    onLikeSwipe,
    onDismiss,
  })

  const swipeCardComponents = useMemo(
    () =>
      dynamicData.map(({ id, header, src, content }) => (
        <div
          key={id}
          ref={(ref) => handleNewCard(ref, id)}
          className="swipe-card__container"
          id="swipe-card__container"
        >
          {header && (
            <div className="swipe-card__header-container" id="swipe-card__header-container">
              <h2 id="swipe-card__header">{header}</h2>
            </div>
          )}
          <div className="swipe-card__image-container">
            <img className="swipe-card__image" src={src} alt={src} id="swipe-card__image" />
          </div>
          {content && <div className="swipe-card__content">{content}</div>}
        </div>
      )),
    [dynamicData, handleNewCard],
  )

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {swipeCardComponents}
      </div>
      {withActionButtons && (
        <div className="swipe-card__children">
          <div
            className="swipe-card__action-button"
            id="swipe-card__like-action-button"
            onClick={() => handleActionButtonClick(SwipeDirection.LEFT)}
          >
            {(likeButton && dislikeButton) || <SwiperLeftActionButton />}
          </div>
          <div
            className="swipe-card__action-button"
            id="swipe-card__dislike-action-button"
            onClick={() => handleActionButtonClick(SwipeDirection.RIGHT)}
          >
            {(dislikeButton && likeButton) || <SwiperRightActionButton />}
          </div>
        </div>
      )}
    </div>
  )
}
