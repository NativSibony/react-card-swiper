# React Card Swiper

A Tinder Like - Card Swiper

#### Installation

- `npm install --save react-card-swiper`

---

### Example with MUI

```tsx
import bubbleShooter from '@/assets/images/bubble-shooter.png'
import candyCrash from '@/assets/images/candy-crash.png'
import clashRoyal from '@/assets/images/clash-royal.jpg'

import { Box, IconButton, Stack, Typography } from '@mui/material'

import { CardData, SwipeCard } from 'react-card-swiper'

interface Props {}

const Content = () => (
  <Box p={2}>
    <Typography variant="h5">Lorem, ipsum.</Typography>
    <Typography variant="subtitle2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, sit eum nostrum odit esse ab exercitationem
      alias maxime maiores quis.
    </Typography>
  </Box>
)

const ActionButtons = () => {
  return (
    <Stack direction="row" width={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
      <IconButton aria-label="delete" sx={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)' }}>
        <svg viewBox="0 0 20 20" fill="palegreen" height="2em" width="2em">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </IconButton>

      <IconButton aria-label="delete" sx={{ boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)' }}>
        <svg viewBox="0 0 320 512" fill="lightcoral" height="2em" width="2em">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z" />
        </svg>
      </IconButton>
    </Stack>
  )
}

function Demo({}: Props) {
  const mockData: CardData[] = [
    { src: candyCrash, content: <Content /> },
    { src: clashRoyal, content: <Content /> },
    { src: bubbleShooter, content: <Content /> },
  ]

  return (
    <Stack height={'100%'} width={'100%'} direction="column" alignItems="center" justifyContent={'end'} p={2}>
      <SwipeCard data={mockData} onLike={(el) => console.log(el)} onDislike={(el) => console.log(el)}>
        <ActionButtons />
      </SwipeCard>
    </Stack>
  )
}

export default Demo
```
