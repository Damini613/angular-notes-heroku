import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor(private loader:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');

    // we will update the isLoading variable 

    // we need loader variable which is in loader service

    //for behavior subject we need next() method to upadte the variable value
   //for first time when we sent request we will keep it true that means visible
   
   //this means loader is running 
   this.loader.isLoading.next(true) 

   //after that we must call next handle method to complete the api call
   return next.handle(req).pipe(

//now if some error occurs then again we want to make or loader false

  finalize(()=>{
    this.loader.isLoading.next(false)
  })
   )
   //now since we want to use this interceptor in all http call we must add it in app module

// {provide:HTTP_INTERCEPTORs,useClass:InterceptorsService ,multi:true}

  }
}
