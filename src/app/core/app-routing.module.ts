import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Error404Component} from '../error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/select-flight', pathMatch: 'full'},
  {path: 'select-flight', loadChildren: '../select-flight/select-flight.module#SelectFlightModule'},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: '/error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
