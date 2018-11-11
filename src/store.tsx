import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './reducer';

const Window : any = window as any;
const Store = createStore(Reducer,
  Window.devToolsExtension ? composeWithDevTools() : f => f);

export default Store;