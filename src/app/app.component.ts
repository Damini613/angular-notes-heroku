import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tutorial';

  // now we have to learn @Output decorator

  year : number = 2020
  // i want to change this value , we will do this with event emitter

  newEvent :EventEmitter <number> = new EventEmitter<number>()
ngOnInit(){
  console.log('m app comp')
}
  
  updateYear(event:number){
    this.year = 2021
    this.newEvent.emit(this.year)
  }
}
