import {combineReducers} from 'redux';
import {IAppState} from './app.state';
import {usersReducer} from './users/users.reducer';
import {coreReducer} from './core/core.reducer';
import {carsReducer} from './cars/cars.reducer';


export const reducer = combineReducers<IAppState>({
  core: coreReducer,
  users: usersReducer,
  cars: carsReducer
});
