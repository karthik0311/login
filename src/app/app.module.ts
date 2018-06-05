import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';


var config = {
  apiKey: "AIzaSyDS0SLuCsMoPij9GoeQgszaa16kQI1d7YM",
  authDomain: "login-ca880.firebaseapp.com",
  databaseURL: "https://login-ca880.firebaseio.com",
  projectId: "login-ca880",
  storageBucket: "login-ca880.appspot.com",
  messagingSenderId: "23179282262"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider
  ]
})
export class AppModule {}
