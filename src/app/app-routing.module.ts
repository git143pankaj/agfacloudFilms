import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Components/auth/auth.guard';
import { IdentificationnumComponent } from './Components/auth/identificationnumber/identificationnum/identificationnum.component';
import { LoginComponent } from './Components/auth/login/login.component';
import { OtploginComponent } from './Components/auth/otp/otplogin/otplogin.component';

import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { CloudfilmreportComponent } from './shared/projectdetails/cloudfilmreport/cloudfilmreport.component';
import { DicomreportComponent } from './shared/projectdetails/dicomreport/dicomreport.component';
import { PatientdetailsComponent } from './shared/projectdetails/patientdetails/patientdetails.component';
import { QrcodeComponent } from './shared/projectdetails/qrcode/qrcode.component';
import { SharetoallComponent } from './shared/projectdetails/sharetoall/sharetoall.component';
import { ViewreportsComponent } from './shared/projectdetails/viewreports/viewreports.component';
import { contentRoutes } from './shared/Routes/content-routes';


const routes: Routes = [
  //{path:'', redirectTo:'main/mainpage', pathMatch:'full'},
  { path: 'auth/login', component: LoginComponent },  
  { path: 'projectdetails/patientdetails', component: PatientdetailsComponent },
  { path: 'projectdetails/couldfilmreport', component: CloudfilmreportComponent },
  { path: 'projectdetails/viewreports', component:ViewreportsComponent },
  { path: 'projectdetails/dicomreport', component:DicomreportComponent },
  { path: 'projectdetails/sharetoall', component:SharetoallComponent },
  { path: 'projectdetails/qrcode', component: QrcodeComponent},
  { path: 'auth/login/otplogin', component:OtploginComponent },
  { path: 'auth/login/identificationnum', component:IdentificationnumComponent},
 // { path: '', component: ContentLayoutComponent, children: contentRoutes }
   { path: '', component: ContentLayoutComponent, children: contentRoutes, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
