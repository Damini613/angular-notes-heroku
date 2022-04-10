import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Input()  title:string='app header'
  @Input()  show:boolean=false
  @Input()  link = ''
  constructor() { }

  ngOnInit(): void {
  }

}
