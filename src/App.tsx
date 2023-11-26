import React from 'react'

import { SwipeCard } from './lib'
import { CardData } from './lib/components/SwipeCard'

const Header = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg">Lorem ipsum dolor sit amet.</p>
  </div>
)

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg">Lorem ipsum dolor sit amet.</p>
  </div>
)

const ActionButtons = () => {
  return (
    <div className="flex w-full justify-evenly p-2">
      <div
        className="bg-white rounded-full drop-shadow-md p-2 hover:bg-gray-50 cursor-pointer"
        id="swipe-card__dislike-btn"
        aria-label="uninstall"
      >
        <svg viewBox="0 0 20 20" fill="palegreen" height="3em" width="3em">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className="bg-white rounded-full drop-shadow-md p-2 hover:bg-gray-50 cursor-pointer" aria-label="install">
        <svg viewBox="0 0 320 512" fill="lightcoral" height="3em" width="3em">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z" />
        </svg>
      </div>
    </div>
  )
}

export default function App() {
  const mockData: CardData[] = [
    {
      src: new URL('./assets/images/candy-crash.png', import.meta.url).href,
      header: <Header />,
      content: <Content />,
    },
    {
      src: new URL('./assets/images/clash-royal.jpg', import.meta.url).href,
      header: <Header />,
      content: <Content />,
    },
    {
      src: new URL('./assets/images/bubble-shooter.png', import.meta.url).href,
      header: <Header />,
      content: <Content />,
    },
  ]

  return (
    <main className="flex flex-col h-full w-full p-5">
      <section className="flex h-full w-full relative">
        <SwipeCard data={mockData}>
          <ActionButtons />
        </SwipeCard>
      </section>
    </main>
  )
}
