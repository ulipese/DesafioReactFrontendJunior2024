import AllTodos from './components/AllTodos';
import CompletedTodos from './components/CompletedTodos';
import ActiveTodos from './components/ActiveTodos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTodos />}></Route>
        <Route path="/active" element={<ActiveTodos />}></Route>
        <Route path="/completed" element={<CompletedTodos />}></Route>
      </Routes>
    </Router>
  );
}
