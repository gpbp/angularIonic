import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.afAuth.auth.signOut()
    .then(() => this.navigateToLogin())
    .catch((error) => console.log(error)); 
  }

  private navigateToLogin() {
    this.router.navigateByUrl("login");
  }
}
