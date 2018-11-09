import * as React from 'react';
import { Button, Input } from 'reactstrap';
import { inputComponentProps, inputComponentState } from './input.d';


export default class InputComponent extends React.Component<inputComponentProps, inputComponentState>{
  constructor(props: inputComponentProps) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  public onClick(e: React.MouseEvent<HTMLButtonElement>) {
    this.props.onBtnClick(e);
  }

  public onChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onInputValueChange(e.currentTarget.value);
  }

  public render() {
    return (
      <React.Fragment>
        <Input value={this.props.value} onChange={this.onChange} />
        <Button onClick={this.onClick}>On Click</Button>
      </React.Fragment>
    )
  }
}