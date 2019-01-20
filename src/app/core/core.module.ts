import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';
import {UiloaderComponent} from './uiloader/uiloader.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [UiloaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    HeaderModule,
  ],
  exports: [
    AppRoutingModule,
    GraphQLModule,
    UiloaderComponent,
    HeaderModule,
    FooterComponent,
  ]
})
export class CoreModule {
}
