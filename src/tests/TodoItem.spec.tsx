import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { SetStateAction } from 'react';
import { Item } from './../types/ItemsType';

describe('Input', () => {
  test('Should marks a todo item as did', () => {
    const mockDidItem = jest.fn();

    render(
      <Router>
        <TodoItem // we pass some null attributes just to test what do we want in component
          id={'flrGI'}
          title={'Lavar os pratos'}
          isDone={false}
          editTodo={{
            id: '',
            title: '',
            isDone: false,
          }}
          setTodos={mockDidItem}
          setEditTodo={function (value: SetStateAction<Item>): void {
            throw new Error('Function not implemented.');
          }}
          todos={[
            { id: 'flrGI', title: 'Lavar os pratos', isDone: false }, // just to test
            { id: 'Tw-I9', title: 'Cortar a grama', isDone: true },
            { id: '7f2sf', title: 'Comprar pão', isDone: false },
          ]}
          setCheckAll={''}
          checkAll={''}
          itemsLeft={0}
        />
      </Router>
    );

    const todoCheckbox = screen.getByRole('checkbox');

    fireEvent.click(todoCheckbox, { target: { className: 'checkbox' } });

    expect(mockDidItem).toHaveBeenCalled(); // checks if input calls setTodos, and if the type value matches
  });
});
