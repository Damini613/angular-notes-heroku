import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from '../app-header/app-header.component';


const routes:Routes  = [
  {
    path: '', component:HelloComponent
  }
]

@NgModule({
  declarations: [
    HelloComponent,
    AppHeaderComponent

  ],
  // imports: [
  //   CommonModule
  // ],


  imports: [CommonModule ,RouterModule.forChild(routes),ReactiveFormsModule],  
  exports: [RouterModule]  ,
  // exports:[routes],
  // bootstrap: [HelloComponent]
})
export class LearningModule { }
