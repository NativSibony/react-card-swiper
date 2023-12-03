import { SwipeAction, SwipeDirection } from '..'

interface ActionButtonProps {
  action: SwipeAction
  isCustom?: boolean
  direction: SwipeDirection
  onClick: (direction: SwipeDirection) => void
  buttonContent: React.ReactNode
}

function CardSwiperActionButton({ buttonContent, direction, isCustom = false, action, onClick }: ActionButtonProps) {
  const className = `swipe-card__${isCustom ? 'custom-' : ''}action-button`

  return (
    <div className={className} id={`swipe-card__${action}-action-button`} onClick={() => onClick(direction)}>
      {buttonContent}
    </div>
  )
}

export default CardSwiperActionButton
