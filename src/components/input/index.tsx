import * as React from 'react';
import { fromEvent, of } from 'rxjs';
import { filter,map,tap } from 'rxjs/operators';
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

  public bindKeyEnter(){
    const $body = document.body;
    fromEvent($body, 'keydown')
    .pipe(
      filter((key: KeyboardEvent) => key.keyCode === 13),
      tap((key:KeyboardEvent) => console.log(key)),
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