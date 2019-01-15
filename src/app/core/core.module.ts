import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';
import {UiloaderComponent} from './uiloader/uiloader.component';

@NgModule({
  declarations: [UiloaderComponent],
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
