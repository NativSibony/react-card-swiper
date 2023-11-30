import React from 'react'

import BubbleShooter from '../assets/images/bubble-shooter.png'
import CandyCrash from '../assets/images/candy-crash.png'
import ClashRoyal from '../assets/images/clash-royal.jpg'
import HearthStone from '../assets/images/Hearthstone.jpg'

import { CardSwiper } from '../lib'
import { type CardEvent, type CardData } from '../lib/types/types'

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg">Lorem ipsum dolor sit amet.</p>
  </div>
)

const mockData: CardData[] = [
  {
    id: '88552078',
    meta: { apk: 'some-apk-a.apk' },
    src: BubbleShooter,
    content: <Content />,
  },
  {
    id: 'fc7e0bd4',
    meta: { apk: 'some-apk-b.apk' },
    src: CandyCrash,
    content: <Content />,
  },
  {
    id: 'da9a7067',
    meta: { apk: 'some-apk-c.apk' },
    src: ClashRoyal,
    content: <Content />,
  },
  {
    id: 'da9afc7e',
    meta: { apk: 'some-apk-d.apk' },
    src: HearthStone,
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
        <CardSwiper
          data={mockData}
          onFinish={(status) => console.log(status)}
          onDismiss={handleSwipe}
          withActionButtons
          dislikeButton={<div>Left</div>}
          likeButton={<div>Right</div>}
        />
      </section>
    </main>
  )
}
