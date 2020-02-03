import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private error;
  
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  /**
   * create an user with email and their own password
   * @param formData the data received from the HTML template
   */
  createAccount(formData) {
    if (formData.valid) {
      const email = formData.value.email;
      const password = formData.value.password;
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => this.error = error)
      .then(() => this.router.navigateByUrl("menu"));
    } 
  }
}
