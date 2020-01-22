import { ValidatorFn, AbstractControl } from '@angular/forms';

// retyped password must be the same as the password
export function samePasswordValidator(password: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const same = password === control.value;
      return same ?  null : {'notTheSame': {message: 'The retyped password must be the same as the password'}};
    };
}