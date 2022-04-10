import { Component, OnInit } from '@angular/core';
import { first, interval, Observable, skip, Subscription } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-obs-tcodes',
  templateUrl: './obs-tcodes.component.html',
  styleUrls: ['./obs-tcodes.component.css']
})
export class ObsTCodesComponent implements OnInit {

subscription1 :Subscription = new Subscription()
subscription2 :Subscription = new Subscription()
subscription3 :Subscription = new Subscription()

  obs1:Observable<any> = new Observable((subs)=>{
    subs.next();
  })

  obs2:Observable<any> = new Observable((subs)=>{
    subs.next();
  })

  obs : Observable<any> = new Observable((subs)=>{
    subs.next(1);
    subs.next(2);
    subs.next(3);
    setTimeout(()=>{
    subs.next(4)
    subs.complete();
  },2000)
  
  })
 

  constructor() {
   
   }

  ngOnInit(): void {

    this.obs1 = interval(1000)
    this.obs2 = interval(1000)


    // this is filter
    this.subscription3=this.obs.pipe(map(x=> x*x)).
    subscribe({
     next: (res)=>console.log('hello',res),
     complete: ()=> {console.log('completed')},
     error: (err)=>console.log('hello',err),
   })

this.subscription1=  this.obs1.subscribe({
    next:(res)=>{
      console.log('res 1',res)
    }
  })
 
 this.subscription2= this.obs2.subscribe({
    next:(res)=>{
      console.log('res 2',res)
    }
  })
}

ngOnDestroy(){
  this.subscription1.unsubscribe()
  this.subscription2.unsubscribe()
}


}
