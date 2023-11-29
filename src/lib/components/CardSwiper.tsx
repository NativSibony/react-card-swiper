import '../main.css'

import { SwiperRightActionButton } from './SwiperRightActionButton'
import { SwiperLeftActionButton } from './SwiperLeftActionButton'
import { useCardSwiper } from '../hooks/useCardSwiper'
import { CardSwiperProps, SwipeDirection } from '../types/types'
import { useMemo } from 'react'

export const CardSwiper = (props: CardSwiperProps) => {
  const { data, likeButton, dislikeButton, withActionButtons = false, onDismiss, onFinish } = props
  const { handleClickEvents, handleNewCardSwiper, dynamicData } = useCardSwiper({ onDismiss, onFinish, data })

  const CardComponents = useMemo(
    () =>
      dynamicData.map(({ id, header, src, content, meta }) => (
        <div
          key={id}
          ref={(ref) => handleNewCardSwiper(ref, id, meta)}
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
    [],
  )

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {CardComponents}
      </div>
      {withActionButtons && (
        <div className="swipe-card__children">
          <div
            className="swipe-card__action-button"
            id="swipe-card__like-action-button"
            onClick={() => handleClickEvents(SwipeDirection.LEFT)}
          >
            {(likeButton && dislikeButton) || <SwiperLeftActionButton />}
          </div>
          <div
            className="swipe-card__action-button"
            id="swipe-card__dislike-action-button"
            onClick={() => handleClickEvents(SwipeDirection.RIGHT)}
          >
            {(dislikeButton && likeButton) || <SwiperRightActionButton />}
          </div>
        </div>
      )}
    </div>
  )
}
