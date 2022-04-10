import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalAgeService } from '../cal-age.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  // dob:number=0;
  dob:any
  Age :number=0
  show:boolean= false;
  constructor(private calAge:CalAgeService) { }

  ngOnInit(): void {
  }

  submit(){
    let d = this.dob.toString().slice(0,4)
    console.log(d)
    this.Age=this.calAge.calculateAge(d)
    this.show= true;
  }

}
