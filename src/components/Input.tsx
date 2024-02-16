import { SyntheticEvent, useEffect } from 'react';
import InputProps from '../types/InputProps';

export default function Input(props: InputProps) {
  const { editTodo, setTodos, todos, setCheckAll, checkAll } = props;

  const handleClick = (event: React.SyntheticEvent<EventTarget>): void => {
    const target = event.target as HTMLElement;

    if (target.className === 'input-box__icon') {
      setCheckAll(!checkAll);
      return;
    }
  };
  const handleKey = (event: SyntheticEvent<EventTarget> | any): void => {
    const target = event.target as HTMLFormElement;

    if (event.keyCode === 13 && target.value !== '') {
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
