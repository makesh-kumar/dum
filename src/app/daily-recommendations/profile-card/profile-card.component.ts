import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  @Input() profile: any;
  @Output() swipeLeft = new EventEmitter();
  @Output() swipeRight = new EventEmitter();
  @Output() shortlist = new EventEmitter();

  onSwipeLeft() {
    this.swipeLeft.emit();
  }

  onSwipeRight() {
    this.swipeRight.emit();
  }


  
  onShortlist() {
    this.shortlist.emit();
  }
}
