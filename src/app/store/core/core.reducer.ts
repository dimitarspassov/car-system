import {initialState} from './core.state';
import {ROUTE_CHANGED} from './core.actions';

function handleMessage(state, action) {
  const result = action.result;

  if (result) {
    let message = result.message;
    const errors = result.errors;
    if (errors) {

      const keys = Object.keys(errors);

      if (keys.length > 0) {
        const firstError = Object.keys(errors)[0];
        message = errors[firstError];
      }
    }

    if (message && !result.success) {
      return Object.assign({}, state, {message});
    }

    return Object.assign({}, state, {
      message: null
    });
  }

  return state;
}


function routeChange(state, action) {
  return Object.assign({}, state, {
    message: null
  });
}

export function coreReducer(state = initialState, action) {

  if (action.type === ROUTE_CHANGED) {
    return routeChange(state, action);
  } else {
    return handleMessage(state, action);
  }

}
