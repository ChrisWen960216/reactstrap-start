export interface inputComponentProps{
  onBtnClick: (e:React.MouseEvent<HTMLButtonElement>) => void,
  onInputValueChange: (value: string) => void,
  value: string
}

export interface inputComponentState {}

export interface inputFormProps {}

export interface inputFormState{
  inputValue: string,
}