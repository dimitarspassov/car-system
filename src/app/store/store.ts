import {applyMiddleware, compose, createStore, GenericStoreEnhancer} from 'redux';
import {IAppState} from './app.state';
import freezeState from './deepFreeze';
import {reducer} from './reducer';

declare var window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension) ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(
  reducer,
  compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);

