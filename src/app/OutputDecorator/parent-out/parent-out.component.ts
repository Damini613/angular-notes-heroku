import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-out',
  templateUrl: './parent-out.component.html',
  styleUrls: ['./parent-out.component.css']
})
export class ParentOutComponent implements OnInit {

  title = 'parent'

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(event:string){
    this.title = event
  }

}
