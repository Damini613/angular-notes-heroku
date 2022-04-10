import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-notes',
  templateUrl: './http-notes.component.html',
  styleUrls: ['./http-notes.component.css']
})
export class HttpNotesComponent implements OnInit {
show=true
link='/http'
title='Http Methods'

  notes =
  `need of angular app

  * visible to client

  * client -side -app
  
  
  client side architecture
  
         server (api/db....)

                   ||      |

           request (data)   response(data:JSON)
  
                     ||      |
  
  mobile  desktop computer  (client side)
  
  
  
  
  
  HttpClientModule
  
  
  ----we wrie in services 
  
  HttpClientModule >>@angular/common/http 
  
  
  
  `
  constructor() { }

  ngOnInit(): void {
  }

}
