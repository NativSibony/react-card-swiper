interface CardProps {
  element: HTMLDivElement;
  onDismiss: () => void;
  onLike: () => void;
  onDislike: () => void;
}

interface StartPoint {
  x: number;
  y: number;
}

export class CardSwiper {
  element: HTMLDivElement;
  onDismiss: () => void;
  onLike: () => void;
  onDislike: () => void;

  constructor({ element, onDismiss, onLike, onDislike }: CardProps) {
    this.element = element;
    this.onDismiss = onDismiss;
    this.onLike = onLike;
    this.onDislike = onDislike;
    this.init();
  }

  // private properties
  private startPoint: StartPoint | null = { x: 0, y: 0 };
  private offsetX = 0;
  private offsetY = 0;

  private isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  private init = () => {
    if (this.isTouchDevice()) {
      this.listenToTouchEvents();
    } else {
      this.listenToMouseEvents();
    }
  };

  private listenToTouchEvents = () => {
    this.element.addEventListener("touchstart", (e) => {
      const touch = e.changedTouches[0];
      if (!touch) return;
      const { clientX, clientY } = touch;
      this.startPoint = { x: clientX, y: clientY };
      document.addEventListener("touchmove", this.handleTouchMove);
      this.element.style.transition = "transform 0s";
    });

    document.addEventListener("touchend", this.handleTouchEnd);
    document.addEventListener("cancel", this.handleTouchEnd);
  };

  private listenToMouseEvents = () => {
    this.element.addEventListener("mousedown", (e) => {
      const { clientX, clientY } = e;
      this.startPoint = { x: clientX, y: clientY };
      document.addEventListener("mousemove", this.handleMouseMove);
      this.element.style.transition = "transform 0s";
    });

    document.addEventListener("mouseup", this.handleMoveUp);

    // prevent card from being dragged
    this.element.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
  };

  private handleMove = (x: number, y: number) => {
    if (!this.startPoint) return;
    this.offsetX = x - this.startPoint.x;
    this.offsetY = y - this.startPoint.y;
    const rotate = this.offsetX * 0.1;
    this.element.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) rotate(${rotate}deg)`;
    // dismiss card
    if (Math.abs(this.offsetX) > this.element.clientWidth * 0.2) {
      this.dismiss(this.offsetX > 0 ? 1 : -1);
    }
  };

  // mouse event handlers
  private handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    if (!this.startPoint) return;
    const { clientX, clientY } = e;
    this.handleMove(clientX, clientY);
  };

  private handleMoveUp = () => {
    this.startPoint = null;
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.element.style.transform = "";
  };

  // touch event handlers
  private handleTouchMove = (e: TouchEvent) => {
    if (!this.startPoint) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const { clientX, clientY } = touch;
    this.handleMove(clientX, clientY);
  };

  private handleTouchEnd = () => {
    this.startPoint = null;
    document.removeEventListener("touchmove", this.handleTouchMove);
    this.element.style.transform = "";
    this.element.style.transition = "all .5s";
  };

  private dismiss = (direction: number) => {
    this.startPoint = null;
    document.removeEventListener("mouseup", this.handleMoveUp);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("touchend", this.handleTouchEnd);
    document.removeEventListener("touchmove", this.handleTouchMove);
    this.element.style.transition = "all 1s";
    this.element.style.transform = `translate(${direction * window.innerWidth * 2}px, ${this.offsetY}px) rotate(${
      60 * direction
    }deg)`;
    this.element.classList.add("dismissing");
    setTimeout(() => {
      this.element.remove();
    }, 1000);
    if (typeof this.onDismiss === "function") {
      this.onDismiss();
    }
    if (typeof this.onLike === "function" && direction === 1) {
      this.onLike();
    }
    if (typeof this.onDislike === "function" && direction === -1) {
      this.onDislike();
    }
  };
}
