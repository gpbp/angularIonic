import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: 'tab2.login.component.html',
  styleUrls: ['tab2.login.component.scss']
})
export class LoginComponent {
  private error;

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).catch((error) => console.log(error));
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).catch((error) => console.log(error));
  }

  loginWithEmailAndPassword(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .catch((error) => {
        this.error = error;
      });
    }
  }
}
