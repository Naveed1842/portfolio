import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {GraphQLModule} from './graphql.module';
import {UiloaderComponent} from './uiloader/uiloader.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UiloaderComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    GraphQLModule,
    SharedModule,
  ],
  exports: [
    AppRoutingModule,
    GraphQLModule,
    UiloaderComponent,
    HeaderComponent, FooterComponent
  ]
})
export class CoreModule {
}
