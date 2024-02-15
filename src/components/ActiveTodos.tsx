import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import InputArea from './InputArea';
import { useLocation } from 'react-router-dom';

export default function ActiveTodos() {
  const location = useLocation();
  const { passedTodos } = location.state || false;
  const [todos, setTodos] = useState<any | null>(passedTodos || []);

  useEffect(() => {
    if (passedTodos) {
      setTodos(passedTodos);
    }
  }, [passedTodos]);

  return (
    <main className="main">
      <h1 className="main__title">todos</h1>
      <InputArea todos={todos} setTodos={setTodos} filter="active" />
    </main>
  );
}
