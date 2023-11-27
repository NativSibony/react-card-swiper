import React from 'react'

import { SwipeCard, type CardData } from './lib'
import { CardEvent } from './lib/types/types'

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg">Lorem ipsum dolor sit amet.</p>
  </div>
)

const mockData: CardData[] = [
  {
    id: '88552078',
    src: new URL('./assets/images/candy-crash.png', import.meta.url).href,
    content: <Content />,
  },
  {
    id: 'fc7e0bd4',
    src: new URL('./assets/images/clash-royal.jpg', import.meta.url).href,
    content: <Content />,
  },
  {
    id: 'da9a7067',
    src: new URL('./assets/images/bubble-shooter.png', import.meta.url).href,
    content: <Content />,
  },
]

export default function App() {
  const handleSwipe: CardEvent = (el, id, action) => {
    console.log(el, id, action)
  }

  return (
    <main className="flex flex-col h-full w-full p-5">
      <section className="flex h-full w-full relative">
        <SwipeCard
          data={mockData}
          onLikeSwipe={handleSwipe}
          onDislikeSwipe={handleSwipe}
          dislikeButton={<div>Left</div>}
          likeButton={<div>Right</div>}
          withActionButtons
        />
      </section>
    </main>
  )
}
