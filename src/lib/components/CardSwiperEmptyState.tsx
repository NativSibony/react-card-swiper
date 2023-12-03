import { useEffect, useState } from 'react'

interface CardSwiperEmptyStateProps {
  isFinish: boolean
  children: React.ReactNode
}

function CardSwiperEmptyState({ isFinish, children }: CardSwiperEmptyStateProps) {
  const [visible, setVisible] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isFinish) setVisible('show-empty-state')
    }, 100)

    return () => clearTimeout(timeout)
  }, [isFinish])

  return (
    <div className={`swipe-card__empty-state ${visible}`} id="swipe-card__empty-state">
      {children}
    </div>
  )
}

export default CardSwiperEmptyState
