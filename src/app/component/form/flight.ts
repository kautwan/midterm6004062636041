import { DatePipe } from "@angular/common"

export class Flight {

  fullName: string;
  from: string;
  to: string;
  type: string;
  adults: number;
  departure: Date;
  children: number;
  infants: number;
  arrival: Date;

  constructor(fullName:string, from:string, to:string, type:string, adults:number, departure:Date, children:number, infants:number, arrival:Date){

    this.fullName = fullName
    this.from = from
    this.to = to
    this.type = type
    this.adults = adults
    this.departure = departure
    this.children = children
    this.infants = infants
    this.arrival = arrival
  }
}
