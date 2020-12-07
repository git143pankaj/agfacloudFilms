import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  viewReport(){
    this.router.navigate(['/projectdetails/viewreports'])
  }
  cloudfilm() {
    this.router.navigate(['/projectdetails/couldfilmreport'])
  }
  sharetoAll(){
    this.router.navigate(['/projectdetails/sharetoall'])
  }

}
