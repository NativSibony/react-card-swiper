import { useState } from 'react';

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

const Draggable = ({ show, events, withEventStream, outsideEventHandlers, defaultActionButtons, setShow, setOutsideEventHandlers, setDefaultActionButtons, setWithActionButtons, setWithEventStream }: DraggableProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: event.touches[0].clientX, y: event.touches[0].clientY });
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = event.touches[0].clientX - dragStart.x;
    const deltaY = event.touches[0].clientY - dragStart.y;

    setPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    setDragStart({ x: event.touches[0].clientX, y: event.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleOutsideLike = () => {
    document.getElementById('swipe-card__like-action-button')?.click()
  }

  const handleOutsideDislike = () => {
    document.getElementById('swipe-card__dislike-action-button')?.click()
  }

  return (
    <div
      className={`absolute w-[500px] max-md:w-[90%] border-2 hover:bg-slate-200 border-slate-400 p-2 bg-blue-50 rounded-md ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} rounded-lg`}
      style={{
        top: position.y,
        left: position.x,
        display: show ? 'block' : 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='w-full flex items-end justify-end'>
        <div className='p-1 cursor-pointer' onClick={() => setShow((prev) => !prev)}>X</div>
      </div>
      <div className="flex items-center  gap-2 capitalize">
        <input type="checkbox" name="with action buttons" onClick={() => setWithActionButtons((prev) => !prev)} />
        <label htmlFor="checkbox">With action buttons</label>
      </div>
      <div className="flex items-center gap-2 capitalize">
        <input
          type="checkbox"
          defaultChecked={defaultActionButtons}
          name="with action buttons"
          onClick={() => setDefaultActionButtons((prev) => !prev)}
        />
        <label htmlFor="checkbox">Default action buttons</label>
      </div>
      <div>
        <div className="flex items-center gap-2 capitalize">
          <input
            type="checkbox"
            name="with action buttons"
            defaultChecked={withEventStream}
            onClick={() => setWithEventStream((prev) => !prev)}
          />
          <label htmlFor="checkbox">Event Stream</label>
        </div>
        <section className="flex flex-col text-left w-full h-[100px] relative p-2 shadow-[0_0_15px_0_rgba(0,0,0,0.2)_inset] overflow-y-scroll">
          {withEventStream && events.map((event, index) => <div className='bg-slate-300 p-1 m-1' key={index}>{event}</div>)}
        </section>
        <section className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2 capitalize">
            <input
              type="checkbox"
              name="Outside event handlers"
              defaultChecked={outsideEventHandlers}
              onClick={() => setOutsideEventHandlers((prev) => !prev)}
            />
            <label htmlFor="checkbox">Outside event handlers (only works with actions buttons enabled)</label>
          </div>
          <div className={`flex gap-2 ${!outsideEventHandlers ? 'hidden' : ''}`}>
            <button className="bg-red-600 text-white rounded-md p-2 w-full" onClick={handleOutsideDislike}>
              Dislike
            </button>
            <button className="bg-green-600 text-white rounded-md p-2 w-full" onClick={handleOutsideLike}>
              Like
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Draggable;
