import FloatingActionButtons from './components/FloatingActionButtons'
import SwipeCard from './components/SwipeCard'
import { CardWrapper, MainWrapper } from './components/styled/styled'

import candyCrash from './assets/images/candy-crash.png'
import clashOfClans from './assets/images/clash-of-clans.webp'
import bubbleShooter from './assets/images/bubble-shooter.png'
import { appendNewCard } from './utils'

export default function App() {
  const images = [bubbleShooter, clashOfClans, candyCrash]

  return (
    <MainWrapper>
      <CardWrapper>
        {images.map((image) => (
          <SwipeCard ref={(ref) => appendNewCard(ref as HTMLDivElement)} key={image} image={image} />
        ))}
      </CardWrapper>
      <FloatingActionButtons />
    </MainWrapper>
  )
}
