import { CardSwiper } from './cardSwiper'
// DOM
const swiper = document.querySelector('#swiper')

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

const cards = swiper?.children
for (const card in cards) {
  appendNewCard(card as unknown as HTMLDivElement)
}
