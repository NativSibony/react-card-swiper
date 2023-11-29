## <h1 align="center">react-card-swiper</h1>

<h5>A Tinder Like Card Swiper</h6>

[![npm package](https://img.shields.io/npm/v/react-card-swiper/latest.svg)](https://www.npmjs.com/package/react-card-swiper)
[![npm downloads](https://img.shields.io/npm/dm/react-card-swiper.svg)](https://www.npmjs.com/package/react-card-swiper)

## 📦 Installation

```shell
  npm i --save react-card-swiper
```

---

## 🔗 Props

- `data`: Card Data Array of Objects
- `onDismiss`: Card Event of Card Dismiss
- `onFinish`: When All Cards Have Been Dismissed
- `dislikeButton`: your custom react dislike button
- `likeButton`: your custom react like button
- `withActionButtons`: with action buttons flag - if set to true, both like and dislike buttons must be passed as props, otherwise the default one's will appear

| parameter         | type                                   | default | required | description                                 |
| ----------------- | -------------------------------------- | ------- | -------- | ------------------------------------------- |
| data              | CardData[]                             |         | true     | data to be passed to the card               |
| onDismiss         | CardEvent                              |         | false    | When card is dismissed by swipe or by click |
| onFinish          | (status: SwipeAction.FINISHED) => void |         | false    | onFinish event                              |
| dislikeButton     | React.JSX.Element                      |         | false    | your custom dislike button                  |
| likeButton        | React.JSX.Element                      |         | false    | your custom like button                     |
| withActionButtons | Boolean                                | false   | false    | with action buttons flag                    |

---

## 🔨 Usage

```tsx
import { Stack, Typography } from '@mui/material'

import bubbleShooter from '@/assets/images/bubble-shooter.png'
import candyCrash from '@/assets/images/candy-crash.png'
import clashRoyal from '@/assets/images/clash-royal.jpg'

import { CardData, CardEvent, SwipeCard } from 'react-card-swiper'

const Content = () => (
  <Typography px={2} variant="h6">
    Lorem ipsum dolor sit amet.
  </Typography>
)

const mockData: CardData[] = [
  { id: '88552078', meta: { apk: 'some-apk-a.apk' }, src: bubbleShooter, content: <Content /> },
  { id: 'fc7e0bd4', meta: { apk: 'some-apk-b.apk' }, src: candyCrash, content: <Content /> },
  { id: 'da9a7067', meta: { apk: 'some-apk-c.apk' }, src: clashRoyal, content: <Content /> },
]

export default function SwipeSelectionPage() {
  const handleSwipe: CardEvent = (el, meta, id, action) => {
    console.log({ el, meta, id, action })
  }

  const handleFinish = (status: string) => {
    console.log(status) // 'finished'
  }

  return (
    <Stack height={'100%'} width={'100%'} direction="column" alignItems="center" justifyContent={'end'} p={2}>
      <SwipeCard
        data={mockData}
        onFinish={handleFinish}
        dislikeButton={<div>Left</div>}
        likeButton={<div>Right</div>}
        withActionButtons
      />
    </Stack>
  )
}
```
