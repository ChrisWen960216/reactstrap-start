import {listItem} from '../../components/listItem/Listitem.d';
import * as actionType from './actionTypes';

export function removeItem(todoItems:listItem[]){
  return {
    payload: todoItems,
    type: actionType.REMOVE_TODOITEM,
  }
}

export function createItem(todoItems:listItem[]){
  return {
    payload: todoItems,
    type: actionType.CREATE_TODOITEM
  }
}