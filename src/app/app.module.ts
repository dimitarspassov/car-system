import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgReduxModule, NgRedux} from 'ng2-redux';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {CarRoutesModule} from './routes.module';
import {CoreModule} from './core/core.module';
import {HttpModule} from '@angular/http';
import {Router} from '@angular/router';
import {AuthService} from './core/auth.service';
import {config} from './core/config';
import {CarsModule} from './cars/cars.module';
import {store} from './store/store';
import {IAppState} from './store/app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    CarRoutesModule,
    CoreModule,
    UsersModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private authService: AuthService) {
    this.ngRedux.provideStore(store);

    config(this.ngRedux, this.authService, this.router);
  }
}
