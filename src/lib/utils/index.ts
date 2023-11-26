import { CardSwiper } from './cardSwiper'

// functions
export function appendNewCard(element: HTMLDivElement) {
  element &&
    new CardSwiper({
      element,
      onDismiss: () => {
        // for pagination use
        console.log('Dismiss')
      },
      onLike: () => {
        // activate like button animation
        console.log('Like')
      },
      onDislike: () => {
        // activate dislike button animation
        console.log('Dislike')
      },
      dislikeButtonId: 'swipe-card__dislike-btn',
    })
}
