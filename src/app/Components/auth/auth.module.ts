import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { IndentificationnoComponent } from './indentificationno/indentificationno.component';
import { OtploginComponent } from './otp/otplogin/otplogin.component';
import { IdentificationnumComponent } from './identificationnumber/identificationnum/identificationnum.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [LoginComponent, IndentificationnoComponent, OtploginComponent, IdentificationnumComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    Ng2TelInputModule,
    PdfViewerModule
  ]
})
export class AuthModule { }


