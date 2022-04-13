import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = `@Input decorator

  * we use attributes to change value
  when u are calling component via selector as a html tag then if we pass attributes to it then that attributes we have to mention in the selector component with @Input() 
  
  //parent
  <app-child [data]="'parent'"></app-child>
  
  //child
  @Input() data:string = 'child' //it should come from parent
  
  *************************************************************
  
  @Output Decorator
  
  * in this we use event to change the value
  * event emitter
  
  
  
  `
  constructor() { }

  ngOnInit(): void {
  }

}
