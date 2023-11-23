import FloatingActionButtons from './lib/components/FloatingActionButtons'
import SwipeCard from './lib/components/SwipeCard'

import candyCrash from './assets/images/candy-crash.png'
import clashOfClans from './assets/images/clash-of-clans.webp'
import bubbleShooter from './assets/images/bubble-shooter.png'
import { appendNewCard } from './lib/utils/index'

export default function App() {
  const images = [bubbleShooter, clashOfClans, candyCrash]

  return (
    <main className="flex flex-col h-full w-full p-5">
      <section className="flex h-4/5 w-full relative">
        {images.map((image) => (
          <SwipeCard
            ref={(ref) => appendNewCard(ref as HTMLDivElement)}
            key={image}
            image={image}
            content={
              <div className="flex items-center justify-center">
                <p className="text-lg">Lorem ipsum dolor sit amet.</p>
              </div>
            }
          />
        ))}
      </section>
      <section className="flex items-center justify-center h-1/5">
        <FloatingActionButtons />
      </section>
    </main>
  )
}
