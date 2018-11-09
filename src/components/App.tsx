import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { ListGroup } from 'reactstrap';
import Input from './input/index';


class App extends React.Component {
  public render() {
    return (
      <div>
        <Input />
        <ListGroup/>
      </div>
    );
  }
}

export default App;
