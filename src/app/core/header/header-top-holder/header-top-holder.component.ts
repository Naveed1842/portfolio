import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-header-top-holder',
  templateUrl: './header-top-holder.component.html',
  styleUrls: ['./header-top-holder.component.scss']
})
export class HeaderTopHolderComponent implements OnInit {
  @ViewChild('searchBoxWrap') searchBoxWrap: ElementRef;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.store.select(fromRoot.isAuthenticated);
  }

  onClickSearch() {
    this.renderer.addClass(this.searchBoxWrap.nativeElement, 'active');
  }

  onCloseSearch() {
    this.renderer.removeClass(this.searchBoxWrap.nativeElement, 'active');
  }

}
