import * as React from 'react';
import { fromEvent, of } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import InputComponent from './Input';
import { inputFormProps, inputFormState } from './input.d';

export default class Input extends React.Component<inputFormProps, inputFormState>{
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
  }

  public onBtnClick() {
    console.log(this.state.inputValue);
  }

  public onInputValueChange(inputValue: string) {
    of(inputValue)
      .subscribe({
        next: (value: string) => this.setState({ inputValue: value })
      })

  }

  public componentDidMount() {
    const $body = document.body;
    fromEvent($body, 'keydown')
    .pipe(
      filter((key: KeyboardEvent) => key.keyCode === 13),
      map(() => this.onBtnClick())
    )
    .subscribe();
  }

  public render() {
    const { inputValue } = this.state;
    return <InputComponent
      value={inputValue}
      onBtnClick={this.onBtnClick}
      onInputValueChange={this.onInputValueChange} />
  }
}