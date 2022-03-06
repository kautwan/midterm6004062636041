import { Flight } from "../component/form/flight";

export class MockFlight {

  public static mflight: Flight[] = [
    {
      fullName: "Dean",
      from: "Bangkok",
      to: "China",
      type: "return",
      adults: 2,
      departure: new Date('03/03/2665'),
      children: 1,
      infants: 0,
      arrival: new Date('06/03/2565'),
    }
  ]
}
