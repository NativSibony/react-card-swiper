interface CardSwiperRibbonsProps {
  ribbonColors?: {
    bgLike?: string
    bgDislike?: string
    textColor?: string
  }
  likeRibbonText?: string
  dislikeRibbonText?: string
}

function CardSwiperRibbons({ ribbonColors, dislikeRibbonText, likeRibbonText }: CardSwiperRibbonsProps) {
  return (
    <div className="swipe-card__ribbons-container" id="swipe-card__ribbons-container">
      <div
        id="swipe-card__ribbon-like"
        className="swipe-card__ribbon-like"
        style={{ color: ribbonColors?.textColor, backgroundColor: ribbonColors?.bgLike }}
      >
        {likeRibbonText || 'LIKE'}
      </div>
      <div
        id="swipe-card__ribbon-dislike"
        className="swipe-card__ribbon-dislike"
        style={{ color: ribbonColors?.textColor, backgroundColor: ribbonColors?.bgDislike }}
      >
        {dislikeRibbonText || 'PASS'}
      </div>
    </div>
  )
}

export default CardSwiperRibbons
