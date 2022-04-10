import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:string='Template driven form'

  uname:string=''

  constructor() { }

  ngOnInit(){
    console.log('m register comp')
  }
    

  

  submit(f:any){
  
    console.log(f)
    console.log(f.form.controls.uname.value)
   
  }

}
