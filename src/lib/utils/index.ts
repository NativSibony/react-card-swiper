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
      },
      onLike: () => {
        // activate like button animation
      },
      onDislike: () => {
        // activate dislike button animation
      },
    })
}

const cards = swiper?.children
for (const card in cards) {
  appendNewCard(card as unknown as HTMLDivElement)
}
