import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpCompComponent } from './HttpClientModule/http-comp/http-comp.component';
import { HttpNotesComponent } from './HttpClientModule/http-notes/http-notes.component';
import { IntercompComponent } from './Interceptors/intercomp/intercomp.component';
import { AllNotesComponent } from './NotesList/all-notes/all-notes.component';
import { ObsTCodesComponent } from './Observables/obs-tcodes/obs-tcodes.component'
import { EntryToDashbaordGuard } from './Routing Guard/entry-to-dashbaord.guard';
import { ExitGuard } from './Routing Guard/exit.guard';
import { ChildComponent } from './Routing/child/child.component';
import { DashboardComponent } from './Routing/dashboard/dashboard.component';
import { LoginComponent } from './Routing/login/login.component';
import { NotFoundPageComponent } from './Routing/not-found-page/not-found-page.component';
import { ParentComponent } from './Routing/parent/parent.component';
import { RoutingNotesComponent } from './Routing/routing-notes/routing-notes.component';
//  './observables/obs-tcodes/obs-tcodes.component';
import { AgeComponent } from './services/age/age.component';
import { RegisterComponent } from './template-driven-form/register/register.component';

const routes: Routes = [
  {
    // default route
    path:'',
    redirectTo:'/notesList',
    pathMatch:'full'
  },
  {
    path:'notesList',
    component:AllNotesComponent
  },
  {
    path:'login/:id',
    component:LoginComponent
  },
  {
path:'dashboard/:id',
canActivate:[EntryToDashbaordGuard],
canDeactivate:[ExitGuard],

component:DashboardComponent

  },
  {
    path:'',
    component:IntercompComponent
  },
  {
    path:'tcs',
    component:ObsTCodesComponent
  },
  {
    path:'http',
    component:HttpCompComponent
  },
  {
    path:'home',
    component:AgeComponent
  },

  // independent 
  // {
  //   path:'parent',children:[
  //     {path:'',component:ParentComponent},
  //     {path:'child',component:ChildComponent}
  //   ]

  // },
  {
    path:'parent',component:ParentComponent,children:[
    
      {path:'child',component:ChildComponent}
    ]

  },
   //lazy laoding 
  {
    path:'lazy',
  loadChildren:  ()=> import('./LazyLoading/learning/learning.module').then(res => res.LearningModule)
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'routingNotes',
    component:RoutingNotesComponent
  },
  {
    path:'httpNotes',
    component:HttpNotesComponent
  },
  {
    path:'**',
    component:NotFoundPageComponent
  }
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
