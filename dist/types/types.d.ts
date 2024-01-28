export interface SwiperProps extends CardEvents {
    id: CardId;
    meta: CardMetaData;
    element: HTMLDivElement;
}
export interface CardSwiperProps extends CardEvents {
    data: CardData[];
    likeButton?: React.JSX.Element;
    dislikeButton?: React.JSX.Element;
    withActionButtons?: boolean;
    emptyState?: React.JSX.Element;
    withRibbons?: boolean;
    likeRibbonText?: string;
    dislikeRibbonText?: string;
    ribbonColors?: CardRibbonColors;
}
export interface CardEvents {
    onFinish?: (status: SwipeAction.FINISHED) => void;
    onDismiss?: CardEvent;
    onEnter?: CardEnterEvent;
}
export interface CardData {
    id: CardId;
    src: string;
    meta: CardMetaData;
    header?: React.JSX.Element;
    content?: React.JSX.Element;
}
export type CardId = string | number;
export type CardEnterEvent = (element: HTMLDivElement, meta: CardMetaData, id: CardId) => void;
export type CardEvent = (element: HTMLDivElement, meta: CardMetaData, id: CardId, action: SwipeAction, operation: SwipeOperation) => void;
export type CardMetaData = Record<string, unknown> | Array<unknown>;
export interface CardRibbonColors {
    bgLike?: string;
    bgDislike?: string;
    textColor?: string;
}
export declare enum SwipeDirection {
    LEFT = -1,
    RIGHT = 1
}
export declare enum SwipeAction {
    LIKE = "like",
    DISLIKE = "dislike",
    FINISHED = "finished"
}
export declare enum SwipeOperation {
    SWIPE = "swipe",
    CLICK = "click"
}
