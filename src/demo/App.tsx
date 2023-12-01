import React, { useCallback, useEffect, useState } from 'react'

import BubbleShooter from '../assets/images/bubble-shooter.png'
import CandyCrash from '../assets/images/candy-crash.png'
import ClashRoyal from '../assets/images/clash-royal.jpg'
import HearthStone from '../assets/images/Hearthstone.jpg'

import { CardSwiper } from '../lib'
import { type CardEvent, type CardData } from '../lib/types/types'

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg p-3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sapiente in obcaecati quos maxime, sunt corporis aut
      eius accusamus placeat numquam fugiat. Voluptatem, vero iste.
    </p>
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
  const [withActionButtons, setWithActionButtons] = useState(false)
  const [withEventStream, setWithEventStream] = useState(true)
  const [defaultActionButtons, setDefaultActionButtons] = useState(false)
  const [leftActionButton, setLeftActionButton] = useState<React.JSX.Element | undefined>()
  const [rightActionButton, setRightActionButton] = useState<React.JSX.Element | undefined>()
  const [events, setEvents] = useState<string[]>([])

  useEffect(() => {
    if (defaultActionButtons) {
      setLeftActionButton(<div>Left</div>)
      setRightActionButton(<div>Right</div>)
    } else {
      setLeftActionButton(undefined)
      setRightActionButton(undefined)
    }
  }, [defaultActionButtons])

  const handleSwipe: CardEvent = (el, meta, id, action) => {
    setEvents((prev) => [...prev, `- ID: ${id}, Action: ${action}, Callback: ${JSON.stringify(meta)}}`])
  }

  const handleFinish = (status) => {
    if (status) setEvents((prev) => [...prev, `Finish: ${status}`])
  }

  return (
    <main className="flex h-full w-full p-5">
      <aside className="p-8 w-1/3">
        <div className="flex items-center  gap-2 capitalize">
          <input type="checkbox" name="with action buttons" onClick={() => setWithActionButtons((prev) => !prev)} />
          <label htmlFor="checkbox">With action buttons</label>
        </div>
        <div className="flex items-center gap-2 capitalize">
          <input type="checkbox" name="with action buttons" onClick={() => setDefaultActionButtons((prev) => !prev)} />
          <label htmlFor="checkbox">Default action buttons</label>
        </div>
        <div>
          <div className="flex items-center gap-2 capitalize">
            <input
              type="checkbox"
              name="with action buttons"
              defaultChecked={withEventStream}
              onClick={() => setWithEventStream((prev) => !prev)}
            />
            <label htmlFor="checkbox">Event Stream</label>
          </div>
          <section className="flex flex-col text-left w-full h-[500px] relative p-5 shadow-[0_0_15px_0_rgba(0,0,0,0.2)_inset]">
            {withEventStream && events.map((event, index) => <div key={index}>{event}</div>)}
          </section>
        </div>
      </aside>
      <section className="flex items-center justify-center h-full w-2/3 relative overflow-hidden shadow-[0_0_15px_0_rgba(0,0,0,0.2)_inset]">
        <div className="w-[450px] p-6 h-full">
          <CardSwiper
            data={mockData}
            onFinish={handleFinish}
            onDismiss={handleSwipe}
            withActionButtons={withActionButtons}
            dislikeButton={leftActionButton}
            likeButton={rightActionButton}
          />
        </div>
      </section>
    </main>
  )
}
