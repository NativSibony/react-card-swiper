import React, { useEffect, useState } from 'react'
import EmptyState from '../assets/icons/empty-state.svg'

import { CardSwiper } from '../lib'
import { SwipeAction, type CardEvent } from '../lib/types/types'
import { CustomDislikeButton, CustomLikeButton } from './components/Actions'
import Draggable from './components/Draggable'
import { mockData } from './mock/mock'

export default function App() {
  const [show, setShow] = useState(false)
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

  const handleSwipe: CardEvent = (_el, meta, id, action, operation) => {
    setEvents((prev) => [...prev, `- ID: ${id}, Action: ${action}, Operation: ${operation}, Callback: ${JSON.stringify(meta)}}`])
  }

  const handleFinish = (status: SwipeAction) => {
    if (status) setEvents((prev) => [...prev, `Finish: ${status}`])
  }

  return (
    <main className="flex h-full w-full">
      <section className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
        <div className="w-[450px] p-8 h-full">
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
            ribbonColors={{ bgLike: '#4ade80', bgDislike: '#f87171', textColor: 'white' }}
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
        <div className='p-6'>
          <button className="bottom-4 hover:bg-blue-400 right-4 bg-blue-600 text-white rounded-md p-2" onClick={() => setShow((prev) => !prev)}>
            {show ? 'Hide' : 'Show'} Draggable Toolbox
          </button>
        </div>
        <Draggable
          show={show}
          setShow={setShow}
          defaultActionButtons={defaultActionButtons} 
          events={events} 
          outsideEventHandlers={outsideEventHandlers}
          setOutsideEventHandlers={setOutsideEventHandlers}
          setWithEventStream={setWithEventStream}
          setWithActionButtons={setWithActionButtons}
          withEventStream={withEventStream}
          setDefaultActionButtons={setDefaultActionButtons} />
      </section>
    </main>
  )
}
