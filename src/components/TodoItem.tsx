import { useEffect, useState } from 'react';
import { Item } from '../types/ItemsType';

export default function TodoItem(props: any) {
  const [isOver, setIsOver] = useState(false);
  const [isDone, setIsDone] = useState(props.isDone || false);
  const { checkAll, setCheckAll } = props;

  const handleClick = (event: React.SyntheticEvent<EventTarget>): void => {
    const target = event.target as HTMLElement;
    const { todos, setTodos } = props;
    const { id } = target;

    if (target.className.includes('checkbox')) {
      const newTodoList = todos.map((item: Item) => {
        if (item.id === id) {
          item.isDone = !item.isDone;
          setIsDone(item.isDone);
        }
        return item;
      });

      setTodos(newTodoList);
      return;
    }
    if (target.className.includes('todoItem__delete')) {
      const newTodoList = todos.filter((item: Item) => {
        return item.id !== id;
      });

      setTodos(newTodoList);
    }
  };
  const handleDoubleClick = (
    event: React.SyntheticEvent<EventTarget>
  ): void => {
    const target = event.target as HTMLElement;

    if (!target.className.includes('edit')) {
      const title = target.textContent;
      const id = props.id;
      const editTodo = { id: id, title: title, isDone: isDone };

      props.setEditTodo(editTodo);

      const notEditingTodos = props.todos.filter(
        (item: Item) => item.id !== editTodo.id
      );
      props.setTodos(notEditingTodos);
    }
  };
  const handleMouse = (event: React.SyntheticEvent): void => {
    if (event.nativeEvent.type === 'mouseover') {
      setIsOver(true);
    }
    if (event.nativeEvent.type === 'mouseout') {
      setIsOver(false);
    }
  };

  useEffect(() => {
    setIsDone(isDone);
  }, [isDone, props.todos]);

  useEffect(() => {
    if (checkAll === '') {
      return;
    }
    if (checkAll) {
      const newTodoList = props.todos.map((item: Item) => {
        item.isDone = true;
        setIsDone(item.isDone);
        return item;
      });

      props.setTodos(newTodoList);
      setCheckAll('');
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkAll]);

  return (
    <section
      className={'todoItem ' + (isDone ? 'didItem' : '')}
      onMouseOver={handleMouse}
      onMouseLeave={handleMouse}
      id={props.id}
    >
      <div className="todoItem__checkbox" onClick={handleClick} id={props.id}>
        {isDone ? (
          <button className="checkbox__button" onClick={handleClick}>
            <img
              src="/images/checked-icon.svg"
              alt="checkbox icon"
              className="checkbox__icon"
              id={props.id}
              onClick={handleClick}
            />
          </button>
        ) : (
          ''
        )}
      </div>
      <p className="todoItem__text" onDoubleClick={handleDoubleClick}>
        {props.text.length >= 100
          ? props.text.substring(0, 97) + '...'
          : props.text}
      </p>
      <img
        src="/images/delete-icon.svg"
        alt="delete icon"
        className={'todoItem__delete ' + (isOver ? 'active' : '')}
        id={props.id}
        onClick={handleClick}
      />
    </section>
  );
}
