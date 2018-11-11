export interface ListItemProps {
  content: string,
  onClick: (e:React.MouseEvent<HTMLElement>) => void,
  onDelBtnClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export interface ListItemState{

}

export interface listItem{
  content: string,
  id: string | number
}