import * as actionType from './actionTypes';

export function removeItem(todoItems:object[]){
  return {
    payload: todoItems,
    type: actionType.REMOVE_TODOITEM,
  }
}

export function createItem(todoItems:object[]){
  return {
    payload: todoItems,
    type: actionType.CREATE_TODOITEM
  }
}