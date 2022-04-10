import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  data :any= ''
  name =''
  age=0
  constructor(private s: SerService) { }

  ngOnInit(): void {
    this.s.data.subscribe((res)=>{
     console.log('res',res)
     this.data = res
    })
    console.log('first')
  }

}
