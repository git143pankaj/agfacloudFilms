import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dicomreport',
  templateUrl: './dicomreport.component.html',
  styleUrls: ['./dicomreport.component.scss']
})
export class DicomreportComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  backpage(){
    this.router.navigate(['/projectdetails/couldfilmreport']);    
  }
  

}
