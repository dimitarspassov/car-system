import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './users/register.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './users/login.component';
import {AddCarComponent} from './cars/add.car.component';
import {PrivateRoute} from './core/private.route';
import {ListCarsComponent} from './cars/list.cars.component';
import {CarDetailsComponent} from './cars/car.details.component';
import {ProfileComponent} from './users/profile.component';

const routes: Routes = [
  {path: '', component: ListCarsComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/profile', component: ProfileComponent, canActivate: [PrivateRoute]},
  {path: 'cars/add', component: AddCarComponent, canActivate: [PrivateRoute]},
  {path: 'cars/all', component: ListCarsComponent},
  {path: 'cars/details/:id', component: CarDetailsComponent, canActivate: [PrivateRoute]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule {

}
