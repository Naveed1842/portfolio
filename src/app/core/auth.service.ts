import { State } from './../shared/ui.reducer';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthData } from './auth-data.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers/';
import * as UI from '../shared/ui.actions';
import * as Auth from '../auth/auth.actions';
import { UiService } from '../shared/ui.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
    private uiService: UiService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthentication());
        this.router.navigate(['/dashboard']);
      } else {
        // this.trainingService.cancelSubscriptions();
        this.store.dispatch(new Auth.SetUnAuthentication());
        this.router.navigate(['/login']);
      }
    });
  }

  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.store.dispatch(new UI.StopLoading());
      })
      .catch(error => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackbar(error.message, 'OK', 3000);
      });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }
}
