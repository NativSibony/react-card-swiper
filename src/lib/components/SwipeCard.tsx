import React from 'react'
import './main.css'
import { appendNewCard } from '../utils'
interface SwipeCardProps {
  data: CardData[]
  onLike: (element: HTMLDivElement) => void
  onDislike: (element: HTMLDivElement) => void
  children?: React.JSX.Element
}

export interface CardData {
  src: string
  header?: React.JSX.Element
  content?: React.JSX.Element
}

export const SwipeCard = ({ data, children }: SwipeCardProps) => {
  const handleNewCard: React.LegacyRef<HTMLDivElement> = (ref) => {
    ref && appendNewCard(ref)
  }

  return (
    <div className="swipe-card" id="swipe-card">
      <div className="swipe-card__cards" id="swipe-card__cards">
        {data.map(({ header, src, content }) => (
          <div key={src} ref={handleNewCard} className="swipe-card__container" id="swipe-card__container">
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
