import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface TodoItemProps {
  id: string;
  title: string;
  isDone: boolean;
  editTodo: Item;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  setTodos: Dispatch<SetStateAction<Array<Item>>>;
  todos: Array<Item>;
  setCheckAll: Dispatch<SetStateAction<string | boolean>> | any;
  checkAll: boolean | string;
  itemsLeft: number;
}
