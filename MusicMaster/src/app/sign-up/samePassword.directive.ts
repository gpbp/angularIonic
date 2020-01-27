import { AbstractControl, Validators, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'appSamePassword',
  providers: [{provide: NG_VALIDATORS, useExisting: SamePasswordValidatorDirective, multi: true}]
})
// retyped password must be the same as the password
export class SamePasswordValidatorDirective implements Validators {
  @Input('appSamePassword') password: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
      const same = this.password === control.value;
      return same ?  null : {'notTheSame': {message: 'The retyped password must be the same as the password'}};
  }
}