import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface InputAreaProps {
  editTodo: Item;
  setTodos: Dispatch<SetStateAction<Item>>;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  todos: Dispatch<SetStateAction<Item>> | any;
  setCheckAll: Dispatch<SetStateAction<string | boolean>>;
  checkAll: boolean | string;
  filter: string;
}
