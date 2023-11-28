import React from 'react'

import { SwipeCard } from './lib'
import { type CardEvent, type CardData } from './lib/types/types'

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg">Lorem ipsum dolor sit amet.</p>
  </div>
)

const mockData: CardData[] = [
  {
    id: '88552078',
    meta: { apk: 'some-apk-a.apk' },
    src: new URL('./assets/images/candy-crash.png', import.meta.url).href,
    content: <Content />,
  },
  {
    id: 'fc7e0bd4',
    meta: { apk: 'some-apk-b.apk' },
    src: new URL('./assets/images/clash-royal.jpg', import.meta.url).href,
    content: <Content />,
  },
  {
    id: 'da9a7067',
    meta: { apk: 'some-apk-c.apk' },
    src: new URL('./assets/images/bubble-shooter.png', import.meta.url).href,
    content: <Content />,
  },
]

export default function App() {
  const handleSwipe: CardEvent = (el, meta, id, action) => {
    console.log({ el, meta, id, action })
  }

  return (
    <main className="flex flex-col h-full w-full p-5">
      <section className="flex h-full w-full relative">
        <SwipeCard
          data={mockData}
          onLikeSwipe={handleSwipe}
          onDislikeSwipe={handleSwipe}
          onFinish={(status) => console.log(status)}
          dislikeButton={<div>Left</div>}
          likeButton={<div>Right</div>}
          withActionButtons
        />
      </section>
    </main>
  )
}
