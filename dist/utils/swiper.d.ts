import { CardEvent, CardId, CardMetaData, SwiperProps } from '../types/types';
export declare class Swiper implements SwiperProps {
    element: HTMLDivElement;
    id: CardId;
    meta: CardMetaData;
    onDismiss?: CardEvent;
    constructor({ element, id, meta, onDismiss }: SwiperProps);
    private startPoint;
    private offsetX;
    private offsetY;
    private isTouchDevice;
    private init;
    private listenToTouchEvents;
    private listenToMouseEvents;
    private handleMove;
    private showRibbons;
    private hideRibbons;
    private handleMouseMove;
    handleMoveUp: () => void;
    private handleTouchMove;
    handleTouchEnd: () => void;
    private dismiss;
    dismissById: (direction: number) => void;
}
