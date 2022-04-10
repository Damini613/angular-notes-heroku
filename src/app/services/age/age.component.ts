import { Component, OnInit } from '@angular/core';
import { CalAgeService } from '../cal-age.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  dob:number=0;
  Age :number=0
  show:boolean= false;
  constructor(private calAge:CalAgeService) { }

  ngOnInit(): void {
  }

  submit(){
    this.Age=this.calAge.calculateAge(this.dob)
    this.show= true;
  }

}
