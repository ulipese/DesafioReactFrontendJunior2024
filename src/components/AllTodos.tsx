import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import InputArea from './InputArea';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function AllTodos(props: any) {
  const location = useLocation();
  const { passedTodos } = location.state || false;
  const [todos, setTodos] = useState<any | null>(
    passedTodos ? passedTodos : props.initialTodos
  );

  useEffect(() => {
    if (!passedTodos) {
      setTodos(props.initialTodos);
    }
  }, [props.initialTodos]);

  useEffect(() => {
    if (passedTodos) {
      setTodos(passedTodos);
      return;
    }
  }, [passedTodos]);

  return (
    <main className="main">
      <h1 className="main__title">todos</h1>
      <InputArea todos={todos} setTodos={setTodos} filter="all" />
      <Footer />
    </main>
  );
}
