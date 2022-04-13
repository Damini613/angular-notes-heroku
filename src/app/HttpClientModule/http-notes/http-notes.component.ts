import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-notes',
  templateUrl: './http-notes.component.html',
  styleUrls: ['./http-notes.component.css']
})
export class HttpNotesComponent implements OnInit {
show=true
link='/http'
title='Http Methods and Interceptors'

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
  
  ng g c interceptors int_name

it is also a service , app modules ===> providers --> []

injectable 


implement HttpIntercept 

intercept(req,next) ---> overrriide


it tell us that http request started or ended

steps:

1. spinner htlm
//all service 
2.isLoading --> true and false (behaviour subject use)
3.intercept method ovveride and change the value of isLoading
upon http request/response

NOTE: we must add  async pipe as it gives observables (http req...interceptors)
  
  `
  constructor() { }

  ngOnInit(): void {
  }

}
