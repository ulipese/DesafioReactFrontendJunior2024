import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface InputAreaProps {
  editTodo: Item;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  setTodos: Dispatch<SetStateAction<Array<Item>>>;
  todos: Array<Item>;
  setCheckAll: Dispatch<SetStateAction<string | boolean>>;
  checkAll: boolean | string;
  filter: string;
}
