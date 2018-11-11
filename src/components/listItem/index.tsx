import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {removeItem} from '../../redux/todoiItems/action';
import ListItemComponent from './ListItem';
import { listItem, ListItemsProps, ListItemState } from './Listitem.d';

class ListItems extends React.Component<ListItemsProps, ListItemState> {
  constructor(props: any) {
    super(props);
    this.state = {}
    this.onContentClick = this.onContentClick.bind(this);
  }

  public onContentClick(e: React.MouseEvent<HTMLElement>) {
    console.log(e.target);
  }

  public onDelBtnClick(id:string) {
    const {todoItems} = this.props;
    const list = todoItems.filter((todo:listItem) => todo.id !== id);
    return this.props.removeItem(list);
  }

  public generateList() {
    const { todoItems } = this.props;
    const list = todoItems.length > 0
      ? todoItems.map(todo =>
        <ListItemComponent
          key={todo.id}
          content={todo.content}
          onClick={this.onContentClick}
          onDelBtnClick={this.onDelBtnClick.bind(this, todo.id)}
        />)
      : null;
    return list;
  }

  public render() {
    return (
      <React.Fragment>
        {this.generateList()}
      </React.Fragment>)
  }
}

function mapStateToprops(state: any) {
  const { todoItems } = state;
  return { ...todoItems }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    removeItem: (todos:listItem[]) => dispatch(removeItem(todos))
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(ListItems);