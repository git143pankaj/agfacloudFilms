import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sharetoall',
  templateUrl: './sharetoall.component.html',
  styleUrls: ['./sharetoall.component.scss']
})
export class SharetoallComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  qrcodeShow(){
    this.router.navigate(['projectdetails/qrcode']);
  }

}
