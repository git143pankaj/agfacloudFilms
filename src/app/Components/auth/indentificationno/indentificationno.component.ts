import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-indentificationno',
  templateUrl: './indentificationno.component.html',
  styleUrls: ['./indentificationno.component.scss']
})
export class IndentificationnoComponent implements OnInit {

  identifictionForm:FormGroup;
  submitted: boolean = false;
  
  
  constructor(private _fb: FormBuilder, private _authService: AuthService, private router:Router) { }


  ngOnInit(): void {
    this.setIdentifiNo()
  }

  setIdentifiNo() {
    this.identifictionForm = this._fb.group({
      countrycode: ['', Validators.compose([Validators.required])], 
      mobilenum: ['', Validators.compose([Validators.required])],
      identifino: ['', Validators.compose([Validators.required])],
      chbox: ['', Validators.compose([Validators.required])]  
    })
  }


  identificationNumber() {
    console.log(this.identifictionForm.value);  
    this.submitted = true;
    if(this.identifictionForm.invalid){
      return;
    } else{
      this._authService.login(this.identifictionForm.value);
      this.router.navigate(['projectdetails/patientdetails']);
    }

  }

  get f() {
    return this.identifictionForm.controls;
  }






}
