import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface InputProps {
  editTodo: Item;
  setTodos: Dispatch<SetStateAction<Item>> | any;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  todos: React.ComponentState;
  setCheckAll: Dispatch<SetStateAction<string | boolean>> | any;
  checkAll: boolean | string;
  onKeyDown: any;
}
