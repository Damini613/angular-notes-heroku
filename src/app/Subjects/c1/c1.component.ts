import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private s : SerService) { }

  ngOnInit(): void {
  
  }
  goTo(){
    this.s.data.next({
      name:'john doe',
      age :25
    })

  }
}
