import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from './reducers';
import * as UI from './core/ui.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.isLoading);
    // this.store.dispatch(new UI.StartLoading());
    // setTimeout(() => {
    //   this.store.dispatch(new UI.StopLoading());
    // }, 5000);
  }
}
