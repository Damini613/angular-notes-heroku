import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  notes=`angular is be default eager loading 

  index.html --> main.ts --> app module.ts --> app component 
  
  
  app module.ts 
  @NgModule 
  -----
  -----
  -----
  
  there are so many things 
  
  
  normally --> path --> component was loaded 
  
  but route   --> we are loading module --> lazy loading 
  
  
  ng g m mname  --router rname --module app.module
  
  
  NOTE:
   imports: [CommonModule ,RouterModule.forChild(routes)],  
    exports: [RouterModule]  
  
    but for app routing module we have forRoot instead of forChild
    
    //lazy laoding 
  {
    path:'lazy',
  loadChildren:  ()=> import('./LazyLoading/learning/learning.module').then(res => res.LearningModule)
  },
    
    `
  constructor() { }

  ngOnInit(): void {
    console.log('i m hello')
  }

}
