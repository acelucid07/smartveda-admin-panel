import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
// interface ValidatorFn {
//     (control: AbstractControl): ValidationErrors | null
//   }

export function passcheck(control: AbstractControl):ValidationErrors| null {
   let passvalue = control.get('password').value
   let confirmPassvalue =control.get('confirmPassword').value
        

        if(passvalue!==confirmPassvalue)
        {
            return {mismatch:true}
        }
        return null
        
      }
  