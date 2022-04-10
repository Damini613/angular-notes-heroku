import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-notes',
  templateUrl: './routing-notes.component.html',
  styleUrls: ['./routing-notes.component.css']
})
export class RoutingNotesComponent implements OnInit {
show=true
link = `/login/2`
title='Routing & Guard'
  notes=`Angular is single page application and only index.html page gets loaded in browser

 we do component routing from 1 component to another component
 
 
 we have dedicated router module 
 
    there are 2 methods
 
  1. forRoot                   2.forChild

  it is for entire app          only for child it is
 
  Q.if routing /router not present then how to do page navigation?
 
  A.we have to use component selector and use them as a html tag
 
 <router-outlet></router-outlet> it provides space to render your component

 * it is use when specific component is to be render
 
 
 if we want to route upon button click then we have to use routerLink 
 
 routerLink is one way but these is not a good way 
 
 we need some even and bind it 
 
 <button (click)="goToDashboard()" ></button>
 
 suppose we want to check something then only we want to navigate 
 
 -- we will use function 'goToDashboard' and then bind it with 'click' event
 
 in typescript , we need Router service , which have a navigateByUrl method 
 
 this.router.navigateByUrl('/dashboard')
 
 
 2 methods :
 
 navigate([''])         --> it takes array  
 
 navigateByUrl('')    --> it takes string
 
 
  
  Default route 

  * localhost:4200/  
 
  * when nothing is given ''
 
  * we cannot set default route only by 

  path :'' , redirectTo :'/login'
 
  * we also need pathMatch : 'full'
 
   {
     // default route

     path:'',

     redirectTo:'/login',

     pathMatch:'full'
   }
 
 
 
  WildCard routes :
 
   path :'**'

   ,component :NotFoundComponent
 
   if nothing matched then it will show this 404 page not found page
 
   Always put wildcard routes at last 

   top == > bottom (routes executed) 
 
 Parameterized Routing 
 
  path: 'explore/:category', component: ExploreDetailsComponent 
 
 * :category is a variable, as it starts with : (colon)

 * :category is palceholder for PARAMETER that will have category name.

 * You can have any number of variables in path, as long as they begin with : and have different name.
 
 Non Parameterized Routing *** more priority then param
 
 NOTE: Non-parameterised Routing always has higher priority over "Parameterised" Routing.
 
  const routes: Routes = [

   { path: 'explore/:category', component: ExploreDetailsComponent },

   { path: 'explore/settings', component: ExploreSettingsComponent }
  ];
 
 settings does not start with :, hence is non-parameterised.

 Even if ExploreSettingsComponent "path" matches with explore/:category,
 
 precedence is given to explore/settings (non-parameterised). 
 
 So, ExploreSettingsComponent is loaded instead of 
 
 ExploreDetailsComponent.
 
 Reading Parameterized Routing 
 
 * This is achieved using ActivatedRoute service.

 To use it, you first need to import it. Then inject it into the 
 
 constructor of ExploreDetailsComponent.
 
 It provides a params Observable which you can subscribe to receive the route parameters.
 
 import {ActivatedRoute} from "@angular/router";
 
  constructor(private route: ActivatedRoute) {

      let category = this.route.snapshot.paramMap.get('category');
  }
 
 
 Data Sharing -- 4 methods 

 1.url  

 2.parent-> child (rxjs)

 3.child -> parent (rxjs)

 4.subject
 
 
 child routes 
 
 parent > child 
 
 2 way impl 
 
 path :'home',  children : [

   {path:'',comp : HomeComp},

   {path:'products,component:ProductsComp}
 ]
 
 
 parent + child 
 
 path :'home', comp : HomeComp, children : [

   {path:'products,component:ProductsComp}
 ]
 
 o/t p + c
 
 child
 
 path :'home',  children : [

   {path:'',comp : HomeComp},

   {path:'products,component:ProductsComp}
 ]
 
 o/p : c
 

 ***************   ROUTING Guard  *************************
 
 


 canActivateGuard

canDeactivateGuard


    entry ===> Guard ==> [component]  ===> exit  ==>Guard  ===> [comp3]
             
              CAG                        CDG



canActivate

* authorize

* yes ==> allow otherwise ==> deny

canDeactivate

1.already in that comp u are there 

2.again it will do the cross checking

yes ==> allow  , otherwise => deny 

ng g guard/g gname

Q--> canActivate 

      canDeactivateChild


Guard is a also a service , so injectable 


interface -->  canActivate ...method override

canActivate():boolean{

    return true;

}


Login ====> G dashboard

{path:'dashboard', canActivate : [EntryGuard] }

() CanActivate

 ( ) CanActivateChild

 ( ) CanDeactivate

 ( ) CanLoad


 in both canActivateGuard & canDeactivateGuard  ==> 
 
 CanActivate is only the method 

 
 `

  constructor() { }

  ngOnInit(): void {
  }

}
