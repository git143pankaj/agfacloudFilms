import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backpage(){
    this.router.navigate(['/projectdetails/patientdetails'])
  }
  

}
