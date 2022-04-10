import { Component, OnInit } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-test-promises',
  templateUrl: './test-promises.component.html',
  styleUrls: ['./test-promises.component.css']
})
export class TestPromisesComponent implements OnInit {

notes:string=`Promises :

to handle async operation 

in async codes are not excecuted line by line 


we can also use CALL Back but chaining is not good to use.

Solution is Promise 


A Promise has four states:

fulfilled
rejected 
pending
settled


fulfilled: Action related to the promise succeeded.
rejected: Action related to the promise failed.
pending: Promise is still pending i.e. not fulfilled or rejected yet.
settled: Promise has fulfilled or rejected.


Note:

await must be written inside try catch block 

because await only handles resolve and to handle reject we have to write it inside catch block

`

  // 2nd way 

  // Async await 


  aPromise : Promise<any> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('456')
    },3000)
  })

  a = 'not done';

  constructor() { }

  ngOnInit(): void {
  
  this.printA()  
  this.callPromise()


  }

// callPromise(){
//   let value = '1234'

//   this.aPromise.then(res=>{
//     value = res;
//     console.log('resloved func executed: ',value)
//   })
// }

async callPromise(){
  let value = '1234'
  try{
    
  value = await this.aPromise
 
  }catch(err){
    console.log(err)
  }


  // this.aPromise.then(res=>{
  //   value = res;
    console.log('resloved func executed: async await ',value)
  // })
}



  asyncCallToChangeValue:Promise<any> = new Promise((res,rej)=>{
    setTimeout(()=>{
      res(this.a = 'changed')
    },1000)
  })
  
  

  printA(){
    this.asyncCallToChangeValue.then((res)=>{
      console.log("this is a value",this.a)
    })
  
  }

}
