import { listItem } from '../listItem/Listitem.d';

export interface inputComponentProps{
  onBtnClick: (e:React.MouseEvent<HTMLButtonElement>) => void,
  onInputValueChange: (value: string) => void,
  value: string
}

export interface inputComponentState {}

export interface inputFormProps {
  createItem: (todos:listItem[]) => void,
  todoItems: Array<listItem>
}

export interface inputFormState{
  inputValue: string,
}
