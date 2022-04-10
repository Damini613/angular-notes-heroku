import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(public s : SerService,private router:Router) { }

  ngOnInit(): void {
  
  }
  goTo(){
    this.s.data.next({
      name:'john doe',
      age :25
    })
    // this.router.navigateByUrl('/serviceC2')

  }
}
