import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { samePasswordValidator } from './samePassword.directive'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  private error;
  
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    //this.setUpForm();
  }
  
  private setUpForm() {
    this.addValidatorToRetypedPwControl();
  }

  createAccount(formData) {
    if (formData.valid) {
      const email = formData.value.email;
      const password = formData.value.password;
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => this.error = error);
    } 
  }

  private addValidatorToRetypedPwControl() {
    //const passwordControl = this.createAccountForm.get('password');
    //const password = passwordControl.value;
    //this.createAccountForm.get('retyped_password').setValidators(samePasswordValidator(password));
  }
}
