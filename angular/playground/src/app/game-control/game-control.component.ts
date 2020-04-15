import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  interval;
  incrementedValue = 0;
  @Output() onChange = new EventEmitter<Number>();

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.interval = setInterval(() => {
      this.onChange.emit((this.incrementedValue += 1));
    }, 500);
  }
  stopGame() {
    clearInterval(this.interval);
    this.incrementedValue = 0;
    this.onChange.emit(0);
  }
}
