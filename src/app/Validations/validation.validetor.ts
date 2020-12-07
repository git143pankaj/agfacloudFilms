import { FormControl, FormGroup } from '@angular/forms'

export class TextFieldValidators {
    static validTextField(fc: FormControl) {
        if (fc.value != undefined && fc.value != "") {
            const regex = /^[0-9a-zA-Z ]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return { validTextField: true }
            }
        } else {
            return null;
        }

    }
}

// numeric field validations 
export class NumericFiledValidators {
    static validNumericField(fc: FormControl) {
        if (fc.value != undefined && fc.value != "") {
            const regex = /[0-9]/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return { validNumericField: true }
            }

        } else {
            return null;
        }
    }
}

export class OnlyCharFieldValidtors {
    static validonlyCharField(fc: FormControl) {
        if (fc.value != undefined && fc.value != "") {
            const regex = /^[a-zA-Z ]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return { validonlyCharField: true }
            }

        } else {
            return null;
        }
    }
}

//valid for email
export class EmailValidator {
    static validEmail(fc: FormControl) {
        if (fc.value != undefined && fc.value != "") {
            const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
            if (regex.test(fc.value)) {
                return null;
            } else {
                return { validEmail: true };
            }
        } else {
            return null;
        }

    }
}

//nowhitespace validators
export class NowhiteSpaceValidetors {
    static noWhiteSpaceValid(fc: FormControl) {
        if (fc.value != undefined && fc.value != "" && fc.value != null) {
            const isWhiteSpace = (fc.value.toString()).trim().legth === 0;
            if (!isWhiteSpace) {
                return null;
            } else {
                return { noWhiteSpaceValid: true };
            }

        } else {
            return null;
        }
    }
}


//two field validators

export function MustMatchValidtors(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });

        } else {
            matchingControl.setErrors(null);
        }
    };
    
}


//valid for email
export class CheckboxValidator {
    static checked(control:FormControl) {
      return { "checked": control.value };
    }
  }











// export class CheckboxValidator {
//     static checked(fc: FormControl) {
//       return { "checked": control.value };
//     }
//   }