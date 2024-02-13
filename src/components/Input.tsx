import { useEffect, useState } from 'react';
import { Item } from '../types/ItemsType';

export default function Input(props: any) {
  const { editTodo, setTodos, todos } = props;
  const [isActive, setActive] = useState(false);

  const handleClick = async (event: any) => {
    if (
      event.target.className === 'input-box__icon' &&
      isActive === true &&
      todos.length > 0
    ) {
      const didTodos = todos.map((item: Item) => {
        item.isDone = true;
        return item;
      });
      setTodos(didTodos);
      setActive(false);
      return;
    }
    if (
      event.target.className === 'input-box__icon' &&
      isActive === false &&
      todos.length > 0
    ) {
      const notDidTodos = todos.map((item: Item) => {
        item.isDone = false;
        return item;
      });
      setTodos(notDidTodos);
      setActive(true);
      return;
    }
  };
  const handleKey = (event: any) => {
    if (event.keyCode === 13 && event.target.value !== '') {
      setTodos([
        {
          id: Math.random().toString(16).slice(2),
          title: event.target.value,
          isDone: false,
        },
        ...todos,
      ]);

      event.target.value = ''; // clean input
    }
  };

  useEffect(() => {
    const input: HTMLInputElement | any = document.querySelector('input');

    if (input.value !== '' || input.value.length > 0) {
      setTodos([
        {
          id: Math.random().toString(16).slice(2),
          title: input.value,
          isDone: false,
        },
        ...todos,
      ]);

      input.value = ''; // clean input
    }
    if (editTodo.id !== '' && editTodo.id.length !== 0) {
      input.value = editTodo.title;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editTodo]);

  return (
    <section className="input-box">
      <img
        src="/images/down-icon.svg"
        alt="complete todo"
        className="input-box__icon"
        onClick={handleClick}
      />
      <input
        type="text"
        className="input-box__input"
        placeholder="What needs to be done?"
        onKeyDown={handleKey}
      />
    </section>
  );
}
