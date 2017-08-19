import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './users/register.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './users/login.component';

const routes: Routes = [
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CarRoutesModule {

}
