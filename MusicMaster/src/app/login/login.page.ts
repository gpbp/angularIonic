import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  private error;

  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}
  
  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .catch((error) => console.log(error))
    .then(() => this.navigateToMenu());
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .catch((error) => this.error = error)
    .then(() => this.navigateToMenu());
  }

  loginWithEmailAndPassword(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .catch((error) => {
        this.error = error;
      });
      this.navigateToMenu();
    }  
  }

  private navigateToMenu() {
    this.router.navigateByUrl("menu");
  }

  navigateToSignUpComponent() {
    this.router.navigateByUrl("sign-up")
  }
}
