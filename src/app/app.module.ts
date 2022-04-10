import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RegisterComponent } from './template-driven-form/register/register.component';
import { FormsModule } from '@angular/forms';
import { AgeComponent } from './services/age/age.component'
import { CalAgeService } from './services/cal-age.service';
import { TestPromisesComponent } from './promises/test-promises/test-promises.component';
import { ObsTCodesComponent } from './Observables/obs-tcodes/obs-tcodes.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpCompComponent } from './HttpClientModule/http-comp/http-comp.component'

import { IntercompComponent } from './Interceptors/intercomp/intercomp.component'


import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorsService } from './Interceptors/interceptors.service';
import { LoginComponent } from './Routing/login/login.component';
import { DashboardComponent } from './Routing/dashboard/dashboard.component';
import { ParentComponent } from './Routing/parent/parent.component'
import { ChildComponent } from './Routing/child/child.component'
// import { ChildComponent } from './InputDecorator/child/child.component';
import { NotFoundPageComponent } from './Routing/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LearningModule } from './LazyLoading/learning/learning.module';
import { C1Component } from './Subjects/c1/c1.component';
import { C2Component } from './Subjects/c2/c2.component';
import { SerService } from './Subjects/ser.service';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer/app-footer.component';
import { RoutingNotesComponent } from './Routing/routing-notes/routing-notes.component';
import { HttpNotesComponent } from './HttpClientModule/http-notes/http-notes.component';
import { AllNotesComponent } from './NotesList/all-notes/all-notes.component';
// import { AppFooterComponent } from './app-footer/app-footer/app-footer.component';
// import {l} from './LazyLoading'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AgeComponent,
    TestPromisesComponent,
    ObsTCodesComponent,
    HttpCompComponent,
    IntercompComponent,
    LoginComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent,
    NotFoundPageComponent,
    C1Component,
    C2Component,
    AppHeaderComponent,
    AppFooterComponent,
    RoutingNotesComponent,
    HttpNotesComponent,
    AllNotesComponent,
    // AppFooterComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  

    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    LearningModule
  ],
  providers: [CalAgeService,SerService,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
