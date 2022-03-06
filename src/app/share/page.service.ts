import { Injectable } from '@angular/core';
import { MockFlight } from './mock-flight';
import { Flight } from '../component/form/flight';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  flight: Flight[] = [];
  constructor() {
    this.flight = MockFlight.mflight;
  }

  getFlight(): Flight[]{
    return this.flight
  }

  addFlight(f:Flight):void {
    this.flight.push(f)
  }
}
