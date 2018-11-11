import * as React from 'react';
import { Button,ListGroupItem } from 'reactstrap';
import './ListItem.css';
import { ListItemProps, ListItemState } from './Listitem.d';

export default class ListItem extends React.Component<ListItemProps, ListItemState>{
  constructor(props: ListItemProps) {
    super(props);
    this.state = {};
    this.onListItemClick = this.onListItemClick.bind(this);
    this.onDelBtnClick = this.onDelBtnClick.bind(this);
  }

  public onDelBtnClick(e:React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    return this.props.onDelBtnClick(e);
  }

  public onListItemClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    return this.props.onClick(e);
  }

  public render() {
    const { content } = this.props;
    return (
      <div
        onClick={this.onListItemClick}
        role='presentation'>
        <ListGroupItem className='list-item'>
        {content}
        <Button onClick={this.onDelBtnClick} color='danger'>X</Button>
        </ListGroupItem>
      </div>

    )
  }
}