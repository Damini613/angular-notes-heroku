import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

 @Input() rLink=''
  constructor() { }

  ngOnInit(): void {
  }

}
