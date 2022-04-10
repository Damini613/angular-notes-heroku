import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-out',
  templateUrl: './child-out.component.html',
  styleUrls: ['./child-out.component.css']
})
export class ChildOutComponent implements OnInit {

  @Output() newEvent:EventEmitter<string>= new EventEmitter<string>()

title:string='child'



  constructor() { }

  ngOnInit(): void {
  }

  goto(){
    this.newEvent.emit(this.title)
  }

}
