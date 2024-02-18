import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ActiveTodos from '../components/ActiveTodos';

describe('ActiveTodos', () => {
  test('Should render correctly', async () => {
    render(
      <Router>
        <ActiveTodos />
      </Router>
    );

    expect(screen.getByText('todos')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('What needs to be done?')
    ).toBeInTheDocument(); // checks if Input was loaded correctly
    expect(screen.getByText('Clear Completed')).toBeInTheDocument(); // checks if InputArea was loaded correctly
    expect(screen.getByText('Double-click to edit a todo')).toBeInTheDocument(); // checks if Footer was loaded correctly
  });

  test('Should navigate correctly when hits the link', async () => {
    render(
      <Router>
        <ActiveTodos />
      </Router>
    );

    const linkActiveTodos = screen.getByText('All');
    fireEvent.click(linkActiveTodos);

    const pathName = window.location.pathname;

    expect(pathName).toEqual('/');
  });
});
