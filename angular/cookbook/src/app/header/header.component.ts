import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  @Output() onChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(feature: string) {
    this.onChange.emit(feature);
  }
}
