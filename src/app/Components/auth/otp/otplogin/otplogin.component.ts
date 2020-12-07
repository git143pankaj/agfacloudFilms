import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.scss']
})
export class OtploginComponent implements OnInit {

  otplogin: FormGroup;
  otpShow: any;
  submitted: boolean = false;
  otpvaluestore: any;

 


  constructor(private _fb: FormBuilder,
    private _authService: AuthService, private _apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.setLoginform();
    this.logOut();
    // this.otpgenerate();
    this.otpNumget();
  }

  setLoginform() {
    this.otplogin = this._fb.group({
      // countrycode: ['', Validators.compose([Validators.required])], 
      mobilenum:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      enterotp: ['', Validators.compose([Validators.required])],
      chbox: ['', Validators.compose([Validators.required])]

    })
  }

  otpNumget() {
    this._apiService.getOtpNum().subscribe(res => {
      console.log(res);
      this.otpvaluestore = res;
    })
  }




  otpsubmit() {
    console.log(this.otplogin.value);
    this.submitted = true;
    if (this.otplogin.invalid) {
      return;
    } else {
      this._authService.login(this.otplogin.value);
      this.router.navigate(['projectdetails/patientdetails']);
      // 200 : success;
      // 404 : Not able to generate otp
      // 500 : Expeption / error
    }

  }

  get f() {
    return this.otplogin.controls;
  }

  logOut() {
    this._authService.logout();

  }


}
