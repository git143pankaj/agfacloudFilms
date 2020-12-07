import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Global } from 'src/app/shared/global';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-identificationnum',
  templateUrl: './identificationnum.component.html',
  styleUrls: ['./identificationnum.component.scss']
})
export class IdentificationnumComponent implements OnInit {


  identifictionForm: FormGroup;
  submitted: boolean = false;



  constructor(private _fb: FormBuilder, private _apiService: ApiService,
    private _authService: AuthService, private router: Router,
    private _dataService: DataService) { }


  ngOnInit(): void {
    this.setIdentifiNo()
  }

  setIdentifiNo() {
    this.identifictionForm = this._fb.group({
      // countrycode: ['', Validators.compose([Validators.required])], 
      mobilenum:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      identifino: ['', Validators.compose([Validators.required])],
      chbox: ['', Validators.compose([Validators.required])]
    })
  }


  identificationNumber() {
    //console.log(this.identifictionForm.value);  
    this.submitted = true;
    if (this.identifictionForm.invalid) {
      // alert("Invalid");
      return;
    } else {
      // alert("valid");
      this._authService.login(this.identifictionForm.value);
      this._apiService.getIdentificNum(this.identifictionForm.value).subscribe(res => {
        console.log(res);
      })
      this.router.navigate(['projectdetails/patientdetails']);

    }

  }


  // identificationNumber() {
  //   this.submitted = true;
  //   if(this.identifictionForm.valid){
  //     this._dataService.get('http://localhost:8080/AgfaCsServer/checkLoginDetails/loginValiate2?hosid=1&patid=2&styid=3&mobno=1390000&identno=310107123456781234').subscribe(res =>{
  //       console.log(res);
  //     });
  //   }

  // }


  get f() {
    return this.identifictionForm.controls;
  }

}




// onLogin() {
//   // this.loginSubmitted = true;
//   if (this.loginForm.valid) {
//     this._dataService.post(Global.BASE_API_PATH + "UserMaster/Login/", this.loginForm.value).subscribe(res => {
//       console.log(res)
//       if (res.isSuccess) {
//         this._authService.login(res.data)
//         this.strMsg = this._authService.getMessage()
//         if (this.strMsg != '') {
//           this._toastr.error(this.strMsg, 'Login')
//         }
//         //this.loginSubmitted = false;
//       } else {
//         this._toastr.error('Invalid Username and Password !!', 'Login Inner')
//       }
//       this.reset()
//     })

//   } else {
//     this._toastr.error('Invalid Username and Password !!', 'Login Outer')
//   }
// }

// reset() {
//   //this.loginForm.reset();

//   this.loginForm.controls['username'].setValue("");
//   this.loginForm.controls['password'].setValue("");
// }

// //that elname we will access through only own lifecycle hook like ngAfterViewInit()

// onRegistration(formData: any) {
//   this.submitted = true;
//   if (this.registrationForm.invalid) {
//     return;
//   }
//   debugger;
//   this._dataService.post(Global.BASE_API_PATH + "UserMaster/Save/", formData.value).subscribe(res => {
//     debugger;
//     console.log(res);
//     if(res.isSuccess){
//       this._toastr.success("Account has been created successfuly !!", "User Master");
//       this.elname.select('logintab');
//     }else{
//       this._toastr.error(res.errors[0], "User Master");
//     }
//   });

// }
