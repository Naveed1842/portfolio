import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers/';
import * as UI from './ui.actions';
import * as Auth from './auth.actions';

interface AuthData {
  id: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {
  }


  login(authData: AuthData) {
    this.store.dispatch(new UI.StartLoading());
    // TODO Sucess
    this.store.dispatch(new Auth.SetAuthentication());
  }

  logOut() {
  }
}
