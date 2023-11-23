import { ReactNode, forwardRef } from 'react'

interface SwipeCardProps {
  image: string
  header?: ReactNode
  content?: ReactNode
  footer?: ReactNode
}

export const SwipeCard = forwardRef<HTMLDivElement, SwipeCardProps>(
  ({ image, header, content, footer, ...props }, ref) => {
    return (
      <div
        className="flex flex-col justify-between bg-white shadow-md rounded-3xl h-full w-full absolute"
        id="swipe-card"
        {...props}
        ref={ref}
      >
        {header ? (
          <div className="mb-4">
            <h2 className="text-lg font-bold">{header}</h2>
          </div>
        ) : (
          <img className="w-full h-[350px] object-cover rounded-t-3xl" src={image} alt="Cover" />
        )}
        {content && <div className="mb-4">{content}</div>}
        {footer && <div>{footer}</div>}
      </div>
    )
  },
)
