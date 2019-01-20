import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromAuth from '../auth.reducer';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<fromAuth.AuthState>,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

}
