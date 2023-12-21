## <h1 align="center">react-card-swiper</h1>

<h3>A Tinder Like Card Swiper</h6>

[![npm package](https://img.shields.io/npm/v/react-card-swiper/latest.svg)](https://www.npmjs.com/package/react-card-swiper)
[![npm downloads](https://img.shields.io/npm/dm/react-card-swiper.svg)](https://www.npmjs.com/package/react-card-swiper)

## <img src="https://i.ibb.co/StTp25Y/Screenshot-2023-12-20-at-10-00-58.png" alt="demo" />

**[Demo](https://react-card-swiper.netlify.app/)**

## 📦 Installation

```shell
  npm i --save react-card-swiper
```

---

## 🔗 Props

- `data`: Card Data Array of Objects
- `onDismiss`: Card Event of Card Dismiss
- `onEnter`: Card Event of Card Enter
- `onFinish`: When All Cards Have Been Dismissed
- `dislikeButton`: your custom react dislike button
- `likeButton`: your custom react like button
- `withActionButtons`: with action buttons flag - if set to true, both like and dislike buttons must be passed as props, otherwise the default one's will appear
- `emptyState`: your custom empty state when all cards have been dismissed

| parameter         | type                                   | default | required | description                                         |
| ----------------- | -------------------------------------- | ------- | -------- | --------------------------------------------------- |
| data              | CardData[]                             |         | true     | data to be passed to the card                       |
| onDismiss         | CardEvent                              |         | false    | When card is dismissed by swipe or by click         |
| onEnter           | CardEnterEvent                         |         | false    | When new card is entered                            |
| onFinish          | (status: SwipeAction.FINISHED) => void |         | false    | onFinish event                                      |
| dislikeButton     | React.JSX.Element                      |         | false    | your custom dislike button                          |
| likeButton        | React.JSX.Element                      |         | false    | your custom like button                             |
| withActionButtons | Boolean                                | false   | false    | with action buttons flag                            |
| withRibbons       | Boolean                                | false   | false    | with ribbons flag                                   |
| likeRibbonText    | Boolean                                | LIKE    | false    | ribbon like text                                    |
| dislikeRibbonText | Boolean                                | PASS    | false    | ribbon dislike text                                 |
| ribbonColors      | CardRibbonColors                       |         | false    | ribbon background & text colors                     |
| emptyState        | React.JSX.Element                      |         | false    | will be rendered when all cards have been dismissed |

---

## 🔨 Usage

```tsx
import { Stack, Typography } from '@mui/material'

import bubbleShooter from '@/assets/images/bubble-shooter.png'
import candyCrash from '@/assets/images/candy-crash.png'
import clashRoyal from '@/assets/images/clash-royal.jpg'
import EmptyState from '@/assets/images/empty-state.svg'

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
  const handleDismiss: CardEvent = (el, meta, id, action, operation) => {
    console.log({ el, meta, id, action, operation }) // event data to be handled
  }

  const handleFinish = (status: string) => {
    console.log(status) // 'finished'
  }

  const handleEnter: CardEnterEvent = (el, meta, id) => {
    console.log(el, meta, id)
  }

  return (
    <Stack height={'100%'} width={'100%'} direction="column" alignItems="center" justifyContent={'end'} p={2}>
      <SwipeCard
        data={mockData}
        onEnter={handleEnter}
        onFinish={handleFinish}
        onDismiss={handleDismiss}
        dislikeButton={<div>Left</div>}
        likeButton={<div>Right</div>}
        withActionButtons
        withRibbons
        likeRibbonText="INSTALL"
        dislikeRibbonText="PASS"
        ribbonColors={{ bgLike: 'green', bgDislike: 'red', textColor: 'white' }}
        emptyState={
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} textAlign={'center'} gap={2}>
            <Box component={'img'} width={250} src={EmptyState} />
            <Typography variant={'subtitle2'}>
              You've reached the <br /> end of the list
            </Typography>
          </Stack>
        }
      />
    </Stack>
  )
}
```
