import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Routing'
  id:any = 0

  userData ={
    id:2,
    name:'John',
    age:32,
    employee:'Tcs'
  }

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id =   this.route.snapshot.paramMap.get('id')
  }

  goToDashboard(){
    let i = 3 ;

    if(i === 3){
      this.router.navigate([`/dashboard/${this.id}`,this.userData])
    }else{
      this.router.navigateByUrl('/dashboard')
    }
  }
}
