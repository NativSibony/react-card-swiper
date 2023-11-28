import { useCallback, useEffect, useState } from 'react'
import { CardData, CardEvents, SwipeAction, SwipeDirection } from '../types/types'
import { CardSwiper } from '../utils/cardSwiper'

interface UseSwipeCard extends CardEvents {
  data: CardData[]
}

export const useSwipeCard = ({ onDismiss, onDislikeSwipe, onLikeSwipe, onFinish, data }: UseSwipeCard) => {
  const [swiper, setSwiper] = useState<CardSwiper[]>([...Array(data.length)])
  const [dynamicData, setDynamicData] = useState(data)

  const handleLikeSwipe = useCallback(
    (element: HTMLDivElement, id?: CardData['id']) => {
      // Handle the like swipe event here
      setSwiper((prev) => prev.slice(0, -1))
      onLikeSwipe && onLikeSwipe(element, id, SwipeAction.LIKE)
    },
    [onLikeSwipe],
  )

  const handleDislikeSwipe = useCallback(
    (element: HTMLDivElement, id?: CardData['id']) => {
      // Handle the dislike swipe event here
      setSwiper((prev) => prev.slice(0, -1))
      onDislikeSwipe && onDislikeSwipe(element, id, SwipeAction.DISLIKE)
    },
    [setSwiper, onDislikeSwipe],
  )

  const handleDismiss = useCallback(() => {
    onDismiss && onDismiss()
  }, [onDismiss])

  const handleNewCard = useCallback(
    (ref: HTMLDivElement | null, id: CardData['id'], index: number) => {
      if (ref) {
        const swiper = new CardSwiper({
          element: ref,
          id,
          onDismiss: handleDismiss,
          onLikeSwipe: handleLikeSwipe,
          onDislikeSwipe: handleDislikeSwipe,
        })

        setSwiper((prev) => {
          const updatedSwiper = [...prev]
          updatedSwiper[index] = swiper
          return updatedSwiper
        })
      }
    },
    [handleDismiss, handleLikeSwipe, handleDislikeSwipe],
  )

  useEffect(() => {
    if (!swiper?.length && onFinish) onFinish(SwipeAction.FINISH)
  }, [swiper.length, onFinish])

  // Handlers
  const handleActionButtonClick = (direction: SwipeDirection) => {
    if (!swiper.length) return
    swiper.find((s) => s.id === swiper[swiper.length - 1].id)?.dismissById(direction)
  }

  return {
    swiper,
    dynamicData,
    setDynamicData,
    setSwiper,
    handleNewCard,
    handleActionButtonClick,
    handleLikeSwipe,
    handleDislikeSwipe,
  }
}
