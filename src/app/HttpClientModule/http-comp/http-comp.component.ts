import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/Interceptors/loader.service';
import { DeleteService } from '../delete.service';
import { HttpSerService } from '../http-ser.service';
import { PostService } from '../post.service';
import { PutService } from '../put.service';


@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {
  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  title :string = 'Http Client '

  data:any
  constructor(public loader:LoaderService ,private deleteData:DeleteService ,private getData:HttpSerService, private postData:PostService,private putData:PutService) { }

  ngOnInit(): void {
    this.getData.getMethod().subscribe(res=>{
      this.data = res
      // console.log('id ',this.data[1].id)
      // if(this.data[0].hasOwnProperty('idee')){
      //   console.log('yes')
      // }else{
      //   console.log('something went wrong')
      // }
      // console.log('hasOwnProperty',this.data[0].hasOwnProperty('id'))
      console.log('data',this.data)
    })


    
  this.postData.postMethod().subscribe(res =>{
    console.log(res)
  })


  this.putData.putMethod(1).subscribe((res)=>{
    console.log('put method response',res) 
  })
  

  this.deleteData.deleteMethod(2).subscribe((res)=>{
    console.log('deleted')
  })
  
  }






}
