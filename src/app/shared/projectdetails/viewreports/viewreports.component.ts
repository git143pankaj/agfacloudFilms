import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { WebViewer } from '@pdftron/webviewer'
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.scss']
})
export class ViewreportsComponent implements OnInit, AfterViewInit {

  @ViewChild('pdfshow') viewref: ElementRef;


  // pdfSrc = "assets/images/dashboard/report.pdf";

  constructor(private router: Router) { }

  // pdfSource = "https://miro.medium.com/max/485/0*oOVzxN5kbEmFJzbY";

  ngOnInit(): void {
  }


  cloudfilm() {
    this.router.navigate(['/projectdetails/couldfilmreport'])
  }

  backpage() {
    this.router.navigate(['/projectdetails/patientdetails'])
  }


  ngAfterViewInit() {
    WebViewer({
      path:'../assets/lib',
      initialDoc: 'assets/images/dashboard/report.pdf',
    }, this.viewref.nativeElement).then(instance => {

    })
  }


}
