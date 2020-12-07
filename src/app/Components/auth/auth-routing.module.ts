import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationnumComponent } from './identificationnumber/identificationnum/identificationnum.component';
import { IndentificationnoComponent } from './indentificationno/indentificationno.component';
import { OtploginComponent } from './otp/otplogin/otplogin.component';


const routes: Routes = [
  { path: 'identicicationno', component: IndentificationnoComponent },
  { path: 'otplogin', component:OtploginComponent},
  { path: 'identificationnum', component:IdentificationnumComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
