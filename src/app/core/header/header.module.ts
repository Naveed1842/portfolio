import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTabHolderComponent} from './header-tab-holder/header-tab-holder.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {HeaderTopHolderComponent} from './header-top-holder/header-top-holder.component';
import {RouterModule} from '@angular/router';
import {AuthModule} from '../auth/auth.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeaderTabHolderComponent,
    HeaderMainComponent,
    HeaderTopHolderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    HeaderTabHolderComponent,
    HeaderMainComponent,
    HeaderTopHolderComponent
  ]
})
export class HeaderModule {
}
