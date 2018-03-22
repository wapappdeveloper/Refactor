import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', loadChildren:'./home/home.module#HomeModule'},
  {path:'page1', loadChildren:'./page1/page1.module#Page1Module'},
  {path:'page2', loadChildren:'./page2/page2.module#Page2Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
