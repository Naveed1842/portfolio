import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromUI from '../ui.reducer';

@Component({
  selector: 'app-uiloader',
  templateUrl: './uiloader.component.html',
  styleUrls: ['./uiloader.component.scss']
})
export class UiloaderComponent implements OnInit {

  constructor(private store: Store<fromUI.UILoaderState>) {
  }

  ngOnInit() {
  }

}
