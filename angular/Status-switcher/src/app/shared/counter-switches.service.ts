import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterSwitchesService {
  counter: number = 0;

  constructor() {}
}
