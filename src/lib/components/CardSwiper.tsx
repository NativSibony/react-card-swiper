import '../main.css'

import { useEffect, useMemo, useState } from 'react'
import { useCardSwiper } from '../hooks/useCardSwiper'
import { CardSwiperProps, SwipeAction, SwipeDirection } from '../types/types'
import CardSwiperActionButton from './CardSwiperActionButton'
import CardSwiperEmptyState from './CardSwiperEmptyState'
import { CardSwiperLeftActionButton } from './CardSwiperLeftActionButton'
import { CardSwiperRightActionButton } from './CardSwiperRightActionButton'

export const CardSwiper = (props: CardSwiperProps) => {
  const { data, likeButton, dislikeButton, withActionButtons = false, emptyState, onDismiss, onFinish } = props
  const { handleClickEvents, handleNewCardSwiper, dynamicData, isFinish } = useCardSwiper({ onDismiss, onFinish, data })
  const [hideActionButtons, setHideActionButtons] = useState('')

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

  useEffect(() => {
    if (isFinish) setHideActionButtons('hide-action-buttons')
  }, [isFinish])

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {CardComponents}
        {emptyState && isFinish && <CardSwiperEmptyState children={emptyState} isFinish={isFinish} />}
      </div>
      {withActionButtons && (
        <div className={`swipe-card__children ${hideActionButtons}`} id="swipe-card__children">
          {likeButton && dislikeButton ? (
            <>
              <CardSwiperActionButton
                isCustom
                direction={SwipeDirection.LEFT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={dislikeButton}
              />
              <CardSwiperActionButton
                isCustom
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={likeButton}
              />
            </>
          ) : (
            <>
              <CardSwiperActionButton
                direction={SwipeDirection.LEFT}
                action={SwipeAction.DISLIKE}
                onClick={handleClickEvents}
                buttonContent={<CardSwiperLeftActionButton />}
              />
              <CardSwiperActionButton
                direction={SwipeDirection.RIGHT}
                action={SwipeAction.LIKE}
                onClick={handleClickEvents}
                buttonContent={<CardSwiperRightActionButton />}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}
