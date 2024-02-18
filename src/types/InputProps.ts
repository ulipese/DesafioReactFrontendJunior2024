import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface InputProps {
  editTodo: Item;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  setTodos: Dispatch<SetStateAction<Array<Item>>>;
  todos: Array<Item>;
  setCheckAll: Dispatch<SetStateAction<string | boolean>> | any;
  checkAll: boolean | string;
  onKeyDown: Function | any;
}
