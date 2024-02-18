import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import InputArea from './InputArea';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import AllTodosProps from '../types/AllTodosProps';
import { Item } from '../types/ItemsType';

export default function AllTodos(props: AllTodosProps) {
  const location = useLocation();
  const { passedTodos } = location.state || false; // get todos from others lists of filter
  const [todos, setTodos] = useState(
    passedTodos ? passedTodos : props.initialTodos // get initial todos from api, if don't have other todos
  );

  useEffect(() => {
    if (passedTodos) {
      setTodos(passedTodos);
      return;
    }
  }, [passedTodos]); // ensures that initial todos will be set

  return (
    <main className="main">
      <h1 className="main__title">todos</h1>
      <InputArea
        todos={todos}
        setTodos={setTodos}
        filter="all"
        editTodo={{
          id: '',
          title: '',
          isDone: false,
        }}
        setEditTodo={function (value: React.SetStateAction<Item>): void {
          throw new Error('Function not implemented.');
        }}
        setCheckAll={function (
          value: React.SetStateAction<string | boolean>
        ): void {
          throw new Error('Function not implemented.');
        }}
        checkAll={''}
      />
      <Footer />
    </main>
  );
}
