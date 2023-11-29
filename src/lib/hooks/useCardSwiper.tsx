import { useEffect, useRef, useState } from 'react'
import { CardData, CardEvents, CardId, CardMetaData, SwipeAction, SwipeDirection } from '../types/types'
import { Swiper } from '../utils/swiper'

interface UseCardSwiper extends CardEvents {
  data: CardData[]
}

export const useCardSwiper = ({ onDismiss, onFinish, data }: UseCardSwiper) => {
  const swiperElements = useRef<Swiper[]>([])

  const [swiperIndex, setCurrentSwiperIndex] = useState(data.length)
  const [dynamicData, setDynamicData] = useState(data)

  useEffect(() => {
    if (!swiperIndex && onFinish) onFinish(SwipeAction.FINISHED)
  }, [onFinish, swiperIndex])

  const handleNewCardSwiper = (ref: HTMLDivElement | null, id: CardId, meta: CardMetaData) => {
    if (ref) {
      const currentSwiper = new Swiper({ element: ref, id, meta, onDismiss: handleDismiss })
      swiperElements.current.push(currentSwiper)
    }
  }

  const handleDismiss = (element: HTMLDivElement, meta: CardMetaData, id: CardId, action: SwipeAction) => {
    setCurrentSwiperIndex((prev) => prev - 1)
    onDismiss && onDismiss(element, meta, id, action)
  }

  const handleClickEvents = (direction: SwipeDirection) => {
    if (swiperIndex) {
      const swiper = swiperElements.current.pop()
      swiper?.dismissById(direction)
      setCurrentSwiperIndex((prev) => prev - 1)
    }
  }

  return {
    dynamicData,
    setDynamicData,
    handleClickEvents,
    handleNewCardSwiper,
  }
}
