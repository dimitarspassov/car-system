import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import {UsersService} from './users.service';
import {UsersActions} from '../store/users/users.actions';
import {LoginComponent} from './login.component';


@NgModule({
  imports: [FormsModule],
  declarations: [RegisterComponent, LoginComponent],
  providers: [UsersService, UsersActions],
  exports: []
})

export class UsersModule {

}
