import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective {

  @Output() swipeLeft = new EventEmitter<void>();
  @Output() swipeRight = new EventEmitter<void>();

  @HostListener('swipeleft')
  onSwipeLeft() {
    this.swipeLeft.emit();
  }

  @HostListener('swiperight')
  onSwipeRight() {
    this.swipeRight.emit();
  }

  constructor() { }
}