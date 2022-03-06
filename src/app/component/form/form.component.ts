import { PageService } from './../../share/page.service';
import { Flight } from './flight';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface From{
  name:string;
  value:string;
}
interface To{
  name:string;
  value:string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  form: FormGroup;
  flight: Flight;
  flightForm!: FormGroup;
  flightList: Array<Flight> = [];
  newDateDepature:any;
  newDateArrival:any;
  checkDate!:boolean;

  constructor(private fb:FormBuilder,private PageService:PageService) {
    this.flight = new Flight('','','','',0,new Date(),0,0,new Date())
    this.form = this.fb.group({
      fullName: ['',[Validators.required]],
      from: ['',[Validators.required]],
      to: ['',[Validators.required]],
      type: ['',[Validators.required]],
      adults: ['',[Validators.required, Validators.pattern('^[0-9].*')]],
      departure: ['',[Validators.required]],
      children: ['',[Validators.required, Validators.pattern('^[0-9].*')]],
      infants: ['',[Validators.required, Validators.pattern('^[0-9].*')]],
      arrival: ['',[Validators.required]]
    })
   }

   fromList:From[] = [
     {name:"Bangkok", value:"bangkok"},
     {name:"Vietnam", value:"Vietnam"},
     {name:"Singapore", value:"Singapore"},
     {name:"Colombia", value:"Colombia"},
     {name:"Indonesia", value:"Indonesia"},
   ]

   toList:To[] = [
     {name:"China", value:"China"},
     {name:"France", value:"France"},
     {name:"Japan", value:"Japan"},
     {name:"New Zealand", value:"New Zealand"},
     {name:"Germany", value:"Germany"},
   ]

   onSubmit(form:FormGroup):void {

     this.flight.fullName = form.get('FullName')?.value
     this.flight.from = form.get('From')?.value
     this.flight.to = form.get('To')?.value
     this.flight.type = form.get('Type')?.value
     this.flight.adults = form.get('Adults')?.value
     this.flight.departure = form.get('Departure')?.value
     this.flight.children = form.get('Children')?.value
     this.flight.infants = form.get('Infants')?.value
     this.flight.arrival = form.get('Arrival')?.value

     let oldDateDeparture = form.get('Departure')?.value
     let oldDateArrival = form.get('Arrival')?.value

     this.newDateDepature = new Date(oldDateDeparture).toLocaleDateString('th-TH') //3/3/2565
     this.newDateArrival = new Date(oldDateArrival).toLocaleDateString('th-TH')
    //  let chunksDepature = newDateDepature.split('/');
    //  let chunksArrival = newDateArrival.split('/');

    //  let formattedDateDepature = chunksDepature[1]+'/'+chunksDepature[0]+'/'+chunksDepature[2];
    //  let formattedDateArrival = chunksArrival[1]+'/'+chunksArrival[0]+'/'+chunksArrival[2];

     let flightRecord = new Flight(form.get('FullName')?.value,
                                    form.get('From')?.value,
                                    form.get('To')?.value,
                                    form.get('Type')?.value,
                                    form.get('Adults')?.value,
                                    this.newDateDepature,
                                    form.get('Children')?.value,
                                    form.get('Infants')?.value,
                                    this.newDateArrival)

    if(this.flight.fullName === '')
    {
      alert("Please enter name!!")
    }
    else if(this.flight.departure > this.flight.arrival )
    {
      alert("Please select valid departure or arrival date!!")
    }
    else if(this.flight.from === '' || this.flight.to === '')
    {
      alert("Please select country would you like to go!!")
    }
    else if(this.flight.type === '')
    {
      alert("Please select trip type!!")
    }
    else if(this.flight.adults <=0)
    {
      alert("At least 1 adult is required!!")
    }
    else if(this.flight.children <0 || this.flight.infants <0)
    {
      alert("Invalid number of children or infants!!")
    }
    else
    {
      this.PageService.addFlight(flightRecord)
      alert("Book Complete")
    }

   }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      FullName: ['',[Validators.required]],
      From: ['',[Validators.required]],
      To: ['',[Validators.required]],
      Type: ['',[Validators.required]],
      Adults: ['',[Validators.required]],
      Departure: ['',[Validators.required]],
      Children: ['',[Validators.required]],
      Infants: ['',[Validators.required]],
      Arrival: ['',[Validators.required]]
    })

    this.flightList = this.PageService.getFlight()
  }

}

