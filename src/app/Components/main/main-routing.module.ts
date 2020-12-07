import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage.component';


const routes: Routes = [
  // {path:'mainpage', component:MainpageComponent}
  {
    path: '', children: [
      { path: 'mainpage', component: MainpageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
