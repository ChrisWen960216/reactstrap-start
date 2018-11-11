import { action as Action } from '../action.d';
import * as actionType from './actionTypes';

const initState = {
  todoItems: []
};

export default function todoItems(state = initState, action: Action) {
  const { type } = action;
  switch (type) {
    case actionType.CREATE_TODOITEM:
    case actionType.REMOVE_TODOITEM:
      return { ...state, todoItems: action.payload }
    default:
      return { ...state }
  }
}