import AllTodos from '../AllTodos';
import getItems from '../../api';
import { GetItemsResponse } from '../../types/ItemsType';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

const mockEnter = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useTodos: () => mockEnter,
}));

describe('AllTodos', () => {
  test('Should render correctly', async () => {
    const items: GetItemsResponse | any = await getItems();
    render(
      <Router>
        <AllTodos initialTodos={items} />
      </Router>
    );

    expect(screen.getByText('todos')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('What needs to be done?')
    ).toBeInTheDocument(); // checks if Input was loaded correctly
    expect(screen.getByText('Lavar os pratos')).toBeInTheDocument(); // checks if initial items from TodoItem was loaded correctly
    expect(screen.getByText('Clear Completed')).toBeInTheDocument(); // checks if InputArea was loaded correctly
    expect(screen.getByText('Double-click to edit a todo')).toBeInTheDocument(); // checks if Footer was loaded correctly
  });

  test('Should navigate correctly when hits the link', async () => {
    const items: GetItemsResponse | any = await getItems();
    render(
      <Router>
        <AllTodos initialTodos={items} />
      </Router>
    );

    const linkActiveTodos = screen.getByText('Active');
    fireEvent.click(linkActiveTodos);

    const pathName = window.location.pathname;

    expect(pathName).toEqual('/active');
  });
});
