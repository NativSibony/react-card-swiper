import React from 'react'
import './main.css'
import { CardSwiper } from '../utils/cardSwiper'

interface SwipeCardProps extends CardEvents {
  data: CardData[]
  children?: React.JSX.Element
}

export interface CardData {
  id: string | number
  src: string
  header?: React.JSX.Element
  content?: React.JSX.Element
}

export interface CardEvents {
  onLike: (element: HTMLDivElement, id?: CardData['id']) => void
  onDislike: (element: HTMLDivElement, id?: CardData['id']) => void
  onDismiss?: () => void
}

export const SwipeCard = ({ data, onLike, onDislike, children }: SwipeCardProps) => {
  const handleNewCard = (ref: HTMLDivElement | null, id: CardData['id']) => {
    if (ref)
      new CardSwiper({
        element: ref,
        id,
        onDismiss: () => {
          // for pagination use
          console.log('Dismiss')
        },
        onLike,
        onDislike,
      })
  }

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {data.map(({ id, header, src, content }) => (
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
        ))}
      </div>
      <div className="swipe-card__children">{children}</div>
    </div>
  )
}
