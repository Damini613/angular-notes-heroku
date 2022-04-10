import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title:string='Template driven form'
rf:any
  

  uname:string=''

  constructor() { }

  ngOnInit(){
    console.log('m register comp')
  }
    

  

  submit(f:any){
    this.rf=f
  
    alert('Hey! Form submitted')
    console.log(f)
    console.log(f.form.controls.uname.value)
    console.log(f.form.controls.uname.touched)
    // console.log( f.form.controls('uname').touched)
  //  console.log(this.get['uname.value'])
  // console.log(this.get().get('uname')?.value)
  console.log(this.rf.form.controls.value)
  }

  get():AbstractControl{

    return this.rf.form.controls
  }

}
