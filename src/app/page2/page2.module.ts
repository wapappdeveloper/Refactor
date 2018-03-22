import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', component:Page2Component}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page2Component]
})
export class Page2Module { }
