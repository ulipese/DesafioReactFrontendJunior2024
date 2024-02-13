import { useEffect, useState } from 'react';
import { Item } from '../types/ItemsType';

export default function TodoItem(props: any) {
  const [isOver, setIsOver] = useState(false);
  const [isDone, setIsDone] = useState(props.isDone || false);
  const { checkAll } = props;

  const handleClick = (event: any) => {
    const { todos, setTodos } = props;
    const { id } = event.target;

    if (!event.target.className.includes('todoItem__delete')) {
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
    if (event.target.className.includes('todoItem__delete')) {
      const newTodoList = todos.filter((item: Item) => {
        return item.id !== id;
      });

      setTodos(newTodoList);
    }
  };
  const handleDoubleClick = (event: any) => {
    if (!event.target.className.includes('edit')) {
      const title = event.target.textContent;
      const id = props.id;
      const editTodo = { id: id, title: title, isDone: isDone };

      props.setEditTodo(editTodo);

      const notEditingTodos = props.todos.filter(
        (item: Item) => item.id !== editTodo.id
      );
      props.setTodos(notEditingTodos);
    }
  };
  const handleMouse = (event: any) => {
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
    if (checkAll) {
      const newTodoList = props.todos.map((item: Item) => {
        item.isDone = true;
        setIsDone(item.isDone);

        return item;
      });

      props.setTodos(newTodoList);
      return;
    }
    if (!checkAll) {
      const newTodoList = props.todos.map((item: Item) => {
        item.isDone = false;
        setIsDone(item.isDone);

        return item;
      });

      props.setTodos(newTodoList);
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
          <img
            src="/images/checked-icon.svg"
            alt="checkbox icon"
            className="checkbox__icon"
          />
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
