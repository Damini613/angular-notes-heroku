import { Component, OnInit } from '@angular/core';
import { first, interval, Observable, skip, Subscription } from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-obs-tcodes',
  templateUrl: './obs-tcodes.component.html',
  styleUrls: ['./obs-tcodes.component.css']
})
export class ObsTCodesComponent implements OnInit {
  notes=`Promises

  only single value it will emit 
  
  not lazy(means we dont need to subscribe it)
  
  we can never destroy a promise
  
  .then -> resolve , .catch --> reject
  async  ==>  await --> try --> resolve , catch --> reject 
  
  syntax :
   aPromise : Promise<any> = new Promise((resolve,reject)=>{}
  
  Observables
  
  it emits multiple values over a period of time
  they are lazy , we have to subscribe it then only it will be executed 
  we can destroy observables
  
  
  
  OPERATORS IN RxJs
  
  1.interval
  this.obs = interval(1000)
  
  2.filtering
  filter 
  
  pipe === filter 
  
  
  pipe()
  
  this.sub3 = this.obs.pipe(first(
      x => x==2
  )).subscribe(res=>clg(res))
  
  
  first 
  skip(2)
  takeLast(2
  )
  
  3.Map
  
  * transform values 
  * widely use 
  * x : 1 2 3 
  o/p  1 4 9 
  (n)^2
  
  
  data : 1 2 3 4 5 6 7 
  
  1. i need first 3 values
  .pipe(firstthree)  ==> 1 2 3
  this.observable.pipe.map(x => x*x).subscribe()
  
  this.obs.pipe(map(x=> x*x))`

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

// this.subscription1=  this.obs1.subscribe({
//     next:(res)=>{
//       console.log('res 1',res)
//     }
//   })
 
 this.subscription2= this.obs2.subscribe({
    next:(res)=>{
      console.log('res 2',res)
    }
  })
}

ngOnDestroy(){
  // this.subscription1.unsubscribe()

  alert('Hey you have unsubscribed the observable, redirected to home page')
  this.subscription2.unsubscribe()
}


}
