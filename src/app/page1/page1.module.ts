import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';

const routes:Routes = [
  {path:'', component:Page1Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page1Component]
})
export class Page1Module { }
