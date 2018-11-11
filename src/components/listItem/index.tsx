import * as React from 'react';
import { connect } from 'react-redux';
import ListItemComponent from './ListItem';

class ListItems extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {}
    this.onContentClick = this.onContentClick.bind(this);
    this.onDelBtnClick = this.onDelBtnClick.bind(this);
  }

  public onContentClick(e:React.MouseEvent<HTMLElement>) {
    console.log(e.target);
   }

  public onDelBtnClick(e:React.MouseEvent<HTMLButtonElement>) { 
    console.log(e.target);
  }

  public render() {
    return (
      <React.Fragment>
        <ListItemComponent
          content='Hello world'
          onClick={this.onContentClick}
          onDelBtnClick={this.onDelBtnClick}
        />
      </React.Fragment>)
  }
}

export default connect()(ListItems);