import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';
import {UiloaderComponent} from './uiloader/uiloader.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [UiloaderComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
  ],
  exports: [
    AppRoutingModule,
    GraphQLModule,
    UiloaderComponent
  ]
})
export class CoreModule {
}
