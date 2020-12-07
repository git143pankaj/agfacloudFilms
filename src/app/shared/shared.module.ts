import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { PatientdetailsComponent } from './projectdetails/patientdetails/patientdetails.component';
import { CloudfilmreportComponent } from './projectdetails/cloudfilmreport/cloudfilmreport.component';
import { ViewreportsComponent } from './projectdetails/viewreports/viewreports.component';
import { DicomreportComponent } from './projectdetails/dicomreport/dicomreport.component';
import { SharetoallComponent } from './projectdetails/sharetoall/sharetoall.component';
import { QrcodeComponent } from './projectdetails/qrcode/qrcode.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentLayoutComponent,
    PatientdetailsComponent, CloudfilmreportComponent,
    ViewreportsComponent, DicomreportComponent, SharetoallComponent, QrcodeComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    RouterModule,
    TranslateModule,
    NgxExtendedPdfViewerModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
