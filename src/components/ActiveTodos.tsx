import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import InputArea from './InputArea';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import { Item } from '../types/ItemsType';

export default function ActiveTodos() {
  const location = useLocation();
  const { passedTodos } = location.state || false;
  const [todos, setTodos] = useState(passedTodos || []); // get todos from others lists of filter

  useEffect(() => {
    if (passedTodos) {
      setTodos(passedTodos);
    }
  }, [passedTodos]); // get the passedTodos and ensure that will be set 

  return (
    <main className="main">
      <h1 className="main__title">todos</h1>
      <InputArea
        todos={todos}
        setTodos={setTodos}
        filter="active"
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
