import '../main.css'

import { SwiperRightActionButton } from './SwiperRightActionButton'
import { SwiperLeftActionButton } from './SwiperLeftActionButton'
import { useCardSwiper } from '../hooks/useCardSwiper'
import { CardSwiperProps, SwipeAction, SwipeDirection } from '../types/types'
import { useMemo } from 'react'
import SwiperActionButton from './SwiperActionButton'

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
        <div className="swipe-card__children" id="swipe-card__children">
          {likeButton && dislikeButton ? (
            <>
              <SwiperActionButton
                isCustom
                direction={SwipeDirection.LEFT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={dislikeButton}
              />
              <SwiperActionButton
                isCustom
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={likeButton}
              />
            </>
          ) : (
            <>
              <SwiperActionButton
                direction={SwipeDirection.LEFT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={<SwiperLeftActionButton />}
              />
              <SwiperActionButton
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={<SwiperRightActionButton />}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
