import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

  link =''
  notesList = ['services','subjects','routing & guard','promises','observables','http','input & output decorator','interceptors','lazy loading','template driven form']
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  mapR(i:number){
    switch(i){
      case 1: return this.link = '/'
    
      default:return this.link='/http'
    }
    

  }

}
