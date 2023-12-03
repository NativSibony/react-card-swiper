import { useCallback, useEffect, useRef, useState } from 'react'
import { CardData, CardEvents, CardId, CardMetaData, SwipeAction, SwipeDirection } from '../types/types'
import { Swiper } from '../utils/swiper'

interface UseCardSwiper extends CardEvents {
  data: CardData[]
}

export const useCardSwiper = ({ onDismiss, onFinish, data }: UseCardSwiper) => {
  const swiperElements = useRef<Swiper[]>([])
  const [swiperIndex, setSwiperIndex] = useState(data.length)
  const [dynamicData, setDynamicData] = useState(data)

  const handleNewCardSwiper = (ref: HTMLDivElement | null, id: CardId, meta: CardMetaData) => {
    if (ref) {
      const currentSwiper = new Swiper({ element: ref, id, meta, onDismiss: handleDismiss })
      swiperElements.current.push(currentSwiper)
    }
  }

  const handleDismiss = (element: HTMLDivElement, meta: CardMetaData, id: CardId, action: SwipeAction) => {
    setSwiperIndex((prev) => prev - 1)
    onDismiss && onDismiss(element, meta, id, action)
    swiperElements.current.pop()
  }

  const handleClickEvents = (direction: SwipeDirection) => {
    if (swiperIndex) {
      const swiper = swiperElements.current[swiperIndex - 1]
      swiper?.dismissById(direction)
    }
  }

  useEffect(() => {
    if (!swiperIndex && onFinish) onFinish(SwipeAction.FINISHED)
  }, [swiperIndex])

  return {
    dynamicData,
    setDynamicData,
    handleClickEvents,
    handleNewCardSwiper,
  }
}
