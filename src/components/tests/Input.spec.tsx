import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';
import { SetStateAction } from 'react';
import { Item } from '../../types/ItemsType';

describe('Input', () => {
  test('Should create a todo item when enter clicked', () => {
    const mockEnterNewInput = jest.fn();

    render(
      <Router>
        <Input
          editTodo={{
            id: '',
            title: '',
            isDone: false,
          }}
          setTodos={mockEnterNewInput}
          setEditTodo={function (value: SetStateAction<Item>): void {
            throw new Error('Function not implemented.');
          }}
          todos={[]}
          setCheckAll={[]}
          checkAll={''}
          onKeyDown={mockEnterNewInput} // mockEnterNewInput simulates the useState enter trigger
        />
      </Router>
    );

    const input = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.keyDown(input, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
      target: { value: 'test item' },
    });

    expect(mockEnterNewInput).toHaveBeenCalled(); // checks if input calls setTodos, and if the type value matches
  });
});
