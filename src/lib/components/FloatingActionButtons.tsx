import { IconCheckmark, IconXmark } from './ActionIcons'

interface FloatingActionButtonsProps {}

export default function FloatingActionButtons({}: FloatingActionButtonsProps) {
  return (
    <div className="flex w-full justify-evenly p-2">
      <div className="bg-white rounded-full drop-shadow-md p-2 hover:bg-gray-50 cursor-pointer" aria-label="uninstall">
        <IconXmark color="#ff624c" width={'2em'} height={'2em'} />
      </div>

      <div className="bg-white rounded-full drop-shadow-md p-2 hover:bg-gray-50 cursor-pointer" aria-label="install">
        <IconCheckmark color="#00cba7" width={'2em'} height={'2em'} />
      </div>
    </div>
  )
}
