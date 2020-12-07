import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckboxValidator } from 'src/app/Validations/validation.validetor';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  otplogin:FormGroup;
  otpShow:any;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.setLoginform();
    this.logOut();
    // this.otpgenerate();
  }

  setLoginform() {
    this.otplogin = this._fb.group({
      countrycode: ['', Validators.compose([Validators.required])], 
      mobilenum: ['', Validators.compose([Validators.required]), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      enterotp: ['', Validators.compose([Validators.required])],
      chbox: ['', Validators.compose([Validators.required])]
     
    })
  }


  otpsubmit() {
    console.log(this.otplogin.value);  
    this.submitted = true;
    if(this.otplogin.invalid){
      return;
    } else{
      this._authService.login(this.otplogin.value);
      this.router.navigate(['identicicationno']);
      // 200 : success;
      // 404 : Not able to generate otp
      // 500 : Expeption / error
    }

  }

  get f() {
    return this.otplogin.controls;
  }





  // loginformSubmit() {
  //   console.log(this.loginForm.value);    
  //   this.submitted = true;
  //   if(this.loginForm.invalid){
  //     return;
  //   } else{
  //     this._authService.login(this.loginForm.value);
  //   }


  // }

  // otpgenerate(){   
  //     let num = '1234567890';
  //     let newOtp = '';
  //     for(let i=0; i<6; i++){
  //       newOtp += num[Math.floor(Math.random()*10)];
  //     }
  //     // document.getElementById('otp').innerHTML = newOtp;    
  //     this.otpShow = newOtp;
  
  // }


  // otpgenerate(){
  //   this._authService.generateOtp();
  // }

  logOut() {
    this._authService.logout();
    
  }


}
