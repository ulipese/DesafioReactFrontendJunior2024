import { useEffect, useState } from 'react';
import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';
import ActiveTodos from './components/ActiveTodos';
import getItems from './api';
import { GetItemsResponse } from './types/ItemsType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  const [initialTodos, setInitialTodos] = useState([]);

  useEffect(() => {
    const callingInitialItems = async () => {
      const items: GetItemsResponse | any = await getItems();
      setInitialTodos(items);
    };

    if (initialTodos.length === 0) {
      callingInitialItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //empty to render just one time

  return (
    <Router>
      <Routes>
        <Route path="/active" element={<ActiveTodos />}></Route>
        <Route path="/completed" element={<CompletedTodos />}></Route>
        <Route
          path="/"
          element={<AllTodos initialTodos={initialTodos} />}
        ></Route>
      </Routes>
    </Router>
  );
}
