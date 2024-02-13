import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import InputArea from './InputArea';
import getItems from '../api';
import { GetItemsResponse } from '../types/ItemsType';

export default function AllTodos() {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    const callingInitialItems = async () => {
      const items: GetItemsResponse | string = await getItems();
      setTodos(items);
    };
    callingInitialItems();
  }, []); //empty to render just one time

  return (
    <main className="main">
      <h1 className="main__title">todos</h1>
      <InputArea todos={todos} setTodos={setTodos} filter="allTodos"/>
    </main>
  );
}
