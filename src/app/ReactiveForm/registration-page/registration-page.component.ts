import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  uname=''
  constructor(private fb:FormBuilder) { }

  loginForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(4),Validators.pattern('^[a-zA-Z]+$')]],
    email:[''],
    gender:[''],
    agree:['']
  })

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm)
    console.log(this.f()['name'].value)
    console.log(this.f()['email'].value)
  }

  f(){
    return this.loginForm.controls
  }

}
