import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectFlightComponent} from './select-flight/select-flight.component';

const routes: Routes = [
  {
    path: '', component: SelectFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectFlightRoutingModule {
}
