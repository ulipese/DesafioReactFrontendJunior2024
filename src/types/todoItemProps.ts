import { Dispatch, SetStateAction } from 'react';
import { Item } from './ItemsType';

export default interface TodoItemProps {
  id: string;
  title: string;
  isDone: boolean;
  editTodo: Item;
  setTodos: Dispatch<SetStateAction<Item>>;
  setEditTodo: Dispatch<SetStateAction<Item>>;
  todos: React.ComponentState;
  setCheckAll: Dispatch<SetStateAction<string | boolean>> | any;
  checkAll: boolean | string;
  itemsLeft: number;
}
