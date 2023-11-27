import { useCallback, useState } from 'react'
import { CardData, CardEvents, SwipeAction, SwipeDirection } from '../types/types'
import { CardSwiper } from '../utils/cardSwiper'

export const useSwipeCard = ({ onDismiss, onDislikeSwipe, onLikeSwipe }: CardEvents) => {
  const [swiper, setSwiper] = useState<CardSwiper[]>([])

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
    (ref: HTMLDivElement | null, id: CardData['id']) => {
      if (ref) {
        const swiper = new CardSwiper({
          element: ref,
          id,
          onDismiss: handleDismiss,
          onLikeSwipe: handleLikeSwipe,
          onDislikeSwipe: handleDislikeSwipe,
        })
        setSwiper((prev) => [...prev, swiper])
      }
    },
    [handleDismiss, handleLikeSwipe, handleDislikeSwipe],
  )

  // Handlers
  const handleActionButtonClick = (direction: SwipeDirection) => {
    if (!swiper.length) return
    swiper.find((s) => s.id === swiper[swiper.length - 1].id)?.dismissById(direction)
  }

  return {
    swiper,
    setSwiper,
    handleNewCard,
    handleActionButtonClick,
    handleLikeSwipe,
    handleDislikeSwipe,
  }
}
