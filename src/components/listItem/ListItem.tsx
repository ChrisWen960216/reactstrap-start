import * as React from 'react';
import { ListGroupItem } from 'reactstrap';
import './ListItem.css';
import { ListItemProps, ListItemState } from './Listitem.d';

export default class ListItem extends React.Component<ListItemProps, ListItemState>{
  constructor(props: ListItemProps) {
    super(props);
    this.state = {};
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  public onListItemClick(e: React.MouseEvent<HTMLElement>) {
    return this.props.onClick(e);
  }

  public render() {
    const { content } = this.props;
    return (
      <div
        onClick={this.onListItemClick}
        role='presentation'>
        <ListGroupItem className='list-item'>{content}</ListGroupItem>
      </div>

    )
  }
}