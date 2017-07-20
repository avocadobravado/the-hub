import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) {
    this.user = afAuth.authState;
  }

  login(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
    this.user.subscribe(data => console.log(data));
  }

  logout(): void {
    this.router.navigate(['']);
    this.afAuth.auth.signOut();
  }

}
