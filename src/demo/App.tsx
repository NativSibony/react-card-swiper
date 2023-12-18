import React, { useEffect, useState } from 'react'

import EmptyState from '../assets/icons/empty-state.svg'
import HearthStone from '../assets/images/Hearthstone.jpg'
import BubbleShooter from '../assets/images/bubble-shooter.png'
import CandyCrash from '../assets/images/candy-crash.png'
import ClashRoyal from '../assets/images/clash-royal.jpg'
import { CardSwiper } from '../lib'
import { type CardData, type CardEvent } from '../lib/types/types'

const Content = () => (
  <div className="flex items-center justify-center">
    <p className="text-lg p-3">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sapiente in obcaecati quos maxime, sunt corporis aut eius
      accusamus placeat numquam fugiat. Voluptatem, vero iste.
    </p>
  </div>
)

const CustomLikeButton = () => {
  return <button className="">Like</button>
}

const CustomDislikeButton = () => {
  return <button className="">Dislike</button>
}

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
  const [defaultActionButtons, setDefaultActionButtons] = useState(true)
  const [outsideEventHandlers, setOutsideEventHandlers] = useState(false)
  const [leftActionButton, setLeftActionButton] = useState<React.JSX.Element | undefined>()
  const [rightActionButton, setRightActionButton] = useState<React.JSX.Element | undefined>()
  const [events, setEvents] = useState<string[]>([])

  useEffect(() => {
    if (!defaultActionButtons) {
      setLeftActionButton(<CustomDislikeButton />)
      setRightActionButton(<CustomLikeButton />)
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

  const handleOutsideLike = () => {
    document.getElementById('swipe-card__like-action-button')?.click()
  }

  const handleOutsideDislike = () => {
    document.getElementById('swipe-card__dislike-action-button')?.click()
  }

  return (
    <main className="flex h-full w-full p-5">
      <aside className="p-8 w-1/3">
        <div className="flex items-center  gap-2 capitalize">
          <input type="checkbox" name="with action buttons" onClick={() => setWithActionButtons((prev) => !prev)} />
          <label htmlFor="checkbox">With action buttons</label>
        </div>
        <div className="flex items-center gap-2 capitalize">
          <input
            type="checkbox"
            defaultChecked={defaultActionButtons}
            name="with action buttons"
            onClick={() => setDefaultActionButtons((prev) => !prev)}
          />
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
          <section className="flex flex-col text-left w-full h-[500px] relative p-5 shadow-[0_0_15px_0_rgba(0,0,0,0.2)_inset] overflow-scroll">
            {withEventStream && events.map((event, index) => <div key={index}>{event}</div>)}
          </section>
          <section className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2 capitalize">
              <input
                type="checkbox"
                name="Outside event handlers"
                defaultChecked={outsideEventHandlers}
                onClick={() => setOutsideEventHandlers((prev) => !prev)}
              />
              <label htmlFor="checkbox">Outside event handlers (only works with actions buttons enabled)</label>
            </div>
            <div className={`flex gap-2 ${!outsideEventHandlers ? 'hidden' : ''}`}>
              <button className="bg-red-600 text-white rounded-md p-2 w-full" onClick={handleOutsideDislike}>
                Dislike
              </button>
              <button className="bg-green-600 text-white rounded-md p-2 w-full" onClick={handleOutsideLike}>
                Like
              </button>
            </div>
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
            withRibbons
            likeRibbonText="INSTALL"
            dislikeRibbonText="PASS"
            ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
            emptyState={
              <div className="flex flex-col align-center justify-center text-center text-neutral-400 gap-4">
                <img width={250} src={EmptyState} />
                <p className="leading-5">
                  You've reached the <br /> end of the list
                </p>
              </div>
            }
          />
        </div>
      </section>
    </main>
  )
}
