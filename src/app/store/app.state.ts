import {ICoreState} from './core/core.state';
import {IUsersState} from './users/users.state';

export interface IAppState {
  core: ICoreState,
  users: IUsersState
}
