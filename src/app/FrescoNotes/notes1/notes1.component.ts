import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes1',
  templateUrl: './notes1.component.html',
  styleUrls: ['./notes1.component.css']
})
export class Notes1Component implements OnInit {

  notes1 : string='' 
 
  constructor() { }

  ngOnInit(): void {
  }

}
