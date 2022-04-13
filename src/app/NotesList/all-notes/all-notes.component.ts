import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

  link =''
  notesList = ['services','subjects','routing & guard','promises',
  'observables','http','input & output decorator','interceptors',
  'lazy loading','template driven form',
  'angular notes 1','angular notes 2','reactive froms'
]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mapR(i:number){
    switch(i){
      case 0: return this.link = '/services'
      case 1:return this.link ='/subjects'
      case 2:return this.link ='/http'
      case 3:return this.link ='/promise'
      case 4:return this.link ='/tcs'
      case 6:return this.link ='/inputDecorator'
      case 8:return this.link ='/lazy'
      case 9:return this.link ='/register'
      case 12:return this.link ='/reactiveForms'
      case 10:return this.link='/notes1'
      case 11:return this.link='/notes2'

    
      default:return this.link='/http'
    }
    

  }

}
