import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponentInput implements OnInit {

  @Input() data:string = 'child' //it should come from parent

  // now we have to learn @Output decorator

  year : number = 2020
  // i want to change this value , we will do this with event emitter

  newEvent :EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }


}
