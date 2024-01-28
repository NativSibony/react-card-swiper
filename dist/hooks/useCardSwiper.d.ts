import { CardData, CardEnterEvent, CardEvents, CardId, CardMetaData, SwipeDirection } from '../types/types';
import { Swiper } from '../utils/swiper';
interface UseCardSwiper extends CardEvents {
    data: CardData[];
}
export declare const useCardSwiper: ({ onDismiss, onFinish, onEnter, data }: UseCardSwiper) => {
    isFinish: boolean;
    dynamicData: CardData[];
    swiperIndex: number;
    swiperElements: import("react").MutableRefObject<Swiper[]>;
    handleEnter: CardEnterEvent;
    setDynamicData: import("react").Dispatch<import("react").SetStateAction<CardData[]>>;
    handleClickEvents: (direction: SwipeDirection) => void;
    handleNewCardSwiper: (ref: HTMLDivElement | null, id: CardId, meta: CardMetaData) => void;
};
export {};
