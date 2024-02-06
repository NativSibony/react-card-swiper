interface DraggableProps {
    show: boolean;
    events: string[];
    withEventStream: boolean;
    defaultActionButtons: boolean;
    outsideEventHandlers: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setDefaultActionButtons: React.Dispatch<React.SetStateAction<boolean>>;
    setWithEventStream: React.Dispatch<React.SetStateAction<boolean>>;
    setWithActionButtons: React.Dispatch<React.SetStateAction<boolean>>;
    setOutsideEventHandlers: React.Dispatch<React.SetStateAction<boolean>>;
}
declare const Draggable: ({ show, events, withEventStream, outsideEventHandlers, defaultActionButtons, setShow, setOutsideEventHandlers, setDefaultActionButtons, setWithActionButtons, setWithEventStream }: DraggableProps) => import("react/jsx-runtime").JSX.Element;
export default Draggable;
