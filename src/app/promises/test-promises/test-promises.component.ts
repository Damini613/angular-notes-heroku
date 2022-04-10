import { Component, OnInit } from '@angular/core';
// import { resolve } from 'dns';

@Component({
  selector: 'app-test-promises',
  templateUrl: './test-promises.component.html',
  styleUrls: ['./test-promises.component.css']
})
export class TestPromisesComponent implements OnInit {


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
