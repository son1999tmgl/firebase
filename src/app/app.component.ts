import { Component } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firebase-app';
  items: any;

  constructor(private auth: AngularFireAuth) {}

  async signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    console.log(credential.user);
  }

  async signInWithGoogle() {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    console.log(credential.user);
  }

  async logout() {
    console.log('logout');
    
    await this.auth.signOut();
  }
}
