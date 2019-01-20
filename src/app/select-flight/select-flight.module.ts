import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectFlightRoutingModule } from './select-flight-routing.module';
import { SelectFlightComponent } from './select-flight/select-flight.component';

@NgModule({
  declarations: [SelectFlightComponent],
  imports: [
    CommonModule,
    SelectFlightRoutingModule
  ]
})
export class SelectFlightModule { }
