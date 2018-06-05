import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from './../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  credentials = {} as usercreds;//from interface
  constructor(private fire: AngularFireAuth,
    public navCtrl: NavController, public authservice: AuthProvider) {

  }

  signin (){
    //signing authentication from providers
    this.authservice.login(this.credentials).then((res: any)=>{
      if (!res.code)
      this.navCtrl.setRoot('TabsPage');
      else
      alert(res);
    })
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

  passwordreset(){
    this.navCtrl.push('PasswordresetPage');
  }

  loginwithfacebook(){
let provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithRedirect(provider).then(() =>{
  firebase.auth().getRedirectResult().then((result) =>{
    alert(JSON.stringify(result));
  }).catch(function(error) {
    alert(JSON.stringify(error))
  })
})
  }
  logoutoffacebook(){
 this.fire.auth.signOut();
  }
}
