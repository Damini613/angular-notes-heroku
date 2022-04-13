import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './FormArray/cards/cards.component';
import { NotesComponent } from  './FrescoNotes/notes/notes.component'
import { Notes1Component } from './FrescoNotes/notes1/notes1.component';
import { Notes2Component } from './FrescoNotes/notes2/notes2.component';
import { HttpCompComponent } from './HttpClientModule/http-comp/http-comp.component';
import { HttpNotesComponent } from './HttpClientModule/http-notes/http-notes.component';
import { ParentComponentInput } from './InputDecorator/parent/parent.component';
import { IntercompComponent } from './Interceptors/intercomp/intercomp.component';
import { AllNotesComponent } from './NotesList/all-notes/all-notes.component';
import { ObsTCodesComponent } from './Observables/obs-tcodes/obs-tcodes.component'
import { ParentOutComponent } from './OutputDecorator/parent-out/parent-out.component';
import { TestPromisesComponent } from './promises/test-promises/test-promises.component';
import { RegistrationPageComponent } from './ReactiveForm/registration-page/registration-page.component';
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
import { C1Component } from './Subjects/c1/c1.component';
import { C2Component } from './Subjects/c2/c2.component';
import { RegisterComponent } from './template-driven-form/register/register.component';

const routes: Routes = [
  {
    // default route
    path:'',
    redirectTo:'/notesList',
    pathMatch:'full'
  },
  {

    path:'outputDecorator',
    component:ParentOutComponent
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
  {
path:'inputDecorator',
component:ParentComponentInput
  },
  {
    path:'notes1',
    component:Notes1Component
  },
  {
    path:'notes2',
    component:Notes2Component
  },
  {
    path:'inputDecoratorNotes',
    component:NotesComponent

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
  {
path:'formArray',
component:CardsComponent

  },
   //lazy laoding 
  {
    path:'lazy',
  loadChildren:  ()=> import('./LazyLoading/learning/learning.module').then(res => res.LearningModule)
  },
  {
   
    path:'reactiveForms',
    component:RegistrationPageComponent
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
    path:'services',
    component:AgeComponent
  },
  {
    path:'subjects',
    component:C1Component
  },
  {
    path:'serviceC2',
    component:C2Component
  },
  {
    path:'promise',
    component:TestPromisesComponent
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
