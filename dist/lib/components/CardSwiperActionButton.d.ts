import { SwipeAction, SwipeDirection } from '..';
interface ActionButtonProps {
    action: SwipeAction;
    isCustom?: boolean;
    direction: SwipeDirection;
    onClick: (direction: SwipeDirection) => void;
    buttonContent: React.ReactNode;
}
declare function CardSwiperActionButton({ buttonContent, direction, isCustom, action, onClick }: ActionButtonProps): import("react/jsx-runtime").JSX.Element;
export default CardSwiperActionButton;
