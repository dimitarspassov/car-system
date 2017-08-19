import {NgModule} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpService} from './http.service';
import {MessageHandlerComponent} from './message.handler.component';
import {AuthService} from './auth.service';
import {PrivateRoute} from './private.route';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, MessageHandlerComponent],
  providers: [HttpService, AuthService, PrivateRoute],
  exports: [NavbarComponent, MessageHandlerComponent]
})

export class CoreModule {

}
