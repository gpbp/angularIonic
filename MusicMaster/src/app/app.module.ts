import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthGuardModule} from '@angular/fire/auth-guard';

import { ReactiveFormsModule } from '@angular/forms';
import {SuccesprogressionPage} from "./succesprogression/succesprogression.page";

const firebaseConfig = {
    apiKey: 'AIzaSyB1t5mp0-jBFS8LKFiIR5jZY8LRqCvFupI',
    authDomain: 'musicmasters-204d0.firebaseapp.com',
    databaseURL: 'https://musicmasters-204d0.firebaseio.com',
    projectId: 'musicmasters-204d0',
    storageBucket: 'musicmasters-204d0.appspot.com',
    messagingSenderId: '872029340548',
    appId: '1:872029340548:web:6008641f8fbb0fba1813d1',
    measurementId: 'G-1NVRVXXQ0Z'
};

@NgModule({
  declarations: [AppComponent, SuccesprogressionPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
