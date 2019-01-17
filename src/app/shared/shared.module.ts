import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassActiveDirective} from './class-active.directive';

@NgModule({
  declarations: [ClassActiveDirective],
  imports: [
    CommonModule,
  ],
  exports: [ClassActiveDirective]
})
export class SharedModule {
}
