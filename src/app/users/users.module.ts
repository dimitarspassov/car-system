import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';
import {LoginComponent} from './login.component';
import {ProfileComponent} from './profile.component';
import {CommonModule} from '@angular/common';
import {CarsActions} from '../store/cars/cars.actions';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  providers: [UsersService, UsersActions, CarsActions],
  exports: []
})

export class UsersModule {

}
