import {Component} from '@angular/core';
import {LoginUserModel} from './login.user.model';
import {UsersActions} from '../store/users/users.actions';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/app.state';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: LoginUserModel = new LoginUserModel();

  constructor(private userActions: UsersActions,
              private ngRedux: NgRedux<IAppState>,
              private router: Router,
              private authService: AuthService) {
  }

  onSubmit() {
    this.userActions.login(this.user);
    this.ngRedux.select(state => state.users)
      .subscribe(users => {
        if (users.userAuthenticated) {
          this.authService.authenticateUser(users.token);
          this.authService.saveUser(users.username);

          this.router.navigateByUrl('');
        }
      });
  }
}
