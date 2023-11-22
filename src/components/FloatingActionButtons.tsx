import Fab from '@mui/material/Fab'
import { CheckIcon, UnCheckIcon } from './ActionIcons'
import { FloatingActionWrapper } from './styled/styled'

interface FloatingActionButtonsProps {}

export default function FloatingActionButtons({}: FloatingActionButtonsProps) {
  return (
    <FloatingActionWrapper>
      <Fab sx={{ bgcolor: 'white', boxShadow: '0 0 5px 0px #00000050' }} aria-label="uninstall">
        <UnCheckIcon stroke="#ff624c" sx={{ fontSize: '40px' }} />
      </Fab>

      <Fab sx={{ bgcolor: 'white', boxShadow: '0 0 5px 0px #00000050' }} aria-label="install">
        <CheckIcon stroke="#00cba7" sx={{ fontSize: '40px' }} />
      </Fab>
    </FloatingActionWrapper>
  )
}
