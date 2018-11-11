import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fromEvent, of } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { createItem } from '../../redux/todoiItems/action';
import getUniqueId from '../../utils/id';
import InputComponent from './Input';
import { inputFormProps, inputFormState } from './input.d';

class Input extends React.Component<inputFormProps, inputFormState>{
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }

  public onBtnClick() {
    const {todoItems} = this.props;
    const todoItem = {id:getUniqueId(),content:this.state.inputValue};
    return this.props.createItem([...todoItems,todoItem])
  }

  public onInputValueChange(inputValue: string) {
    of(inputValue)
      .subscribe({
        next: (value: string) => this.setState({ inputValue: value })
      })
  }

  public bindKeyEnter() {
    const $body = document.body;
    fromEvent($body, 'keydown')
      .pipe(
        filter((key: KeyboardEvent) => key.keyCode === 13),
        debounceTime(2000),
        map(() => this.onBtnClick())
      )
      .subscribe();
  }

  public componentDidMount() {
    this.bindKeyEnter();
  }

  public render() {
    const { inputValue } = this.state;
    return <InputComponent
      value={inputValue}
      onBtnClick={this.onBtnClick}
      onInputValueChange={this.onInputValueChange} />
  }
}

function mapStateToProps(state: any) {
  const { todoItems } = state;
  return { ...todoItems }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    createItem: (todos: any) => dispatch(createItem(todos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);