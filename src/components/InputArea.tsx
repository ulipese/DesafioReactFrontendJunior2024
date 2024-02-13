/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Item } from '../types/ItemsType';
import Input from './Input';
import TodoItem from './TodoItem';

export default function InputArea(props: any) {
  const [editTodo, setEditTodo] = useState({
    id: '',
    title: '',
    isDone: false,
  });
  const [itemsLeft, setItemsLeft] = useState(0);
  const [checkAll, setCheckAll] = useState();

  const handleClick = (event: any) => {
    if (event.target.className === 'moreFuncs__clear') {
      const notDidTodos = props.todos.filter((item: Item) => {
        return item.isDone === false;
      });

      props.setTodos(notDidTodos);
    }
  };

  useEffect(() => {
    setItemsLeft(props.todos.filter((todo: Item) => !todo.isDone).length);
  }, [props.todos]);

  const pathName = window.location.pathname;

  return props.filter === 'allTodos' || props.filter === '' ? (
    <section className="inputArea">
      <Input
        setTodos={props.setTodos}
        todos={props.todos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setCheckAll={setCheckAll}
        checkAll={checkAll}
      />
      <div
        className={
          'inputArea__todoItems ' + (props.todos.length !== 0 ? 'active' : '')
        }
      >
        {props.todos.map((item: Item) => {
          return (
            <TodoItem
              key={JSON.stringify(item.id)}
              id={item.id}
              text={item.title}
              isDone={item.isDone}
              todos={props.todos}
              setTodos={props.setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              itemsLeft={itemsLeft}
              checkAll={checkAll}
            />
          );
        })}
      </div>
      <div className="inputArea__moreFuncs">
        <p className="moreFuncs__itemsCounter">
          {itemsLeft + ' '}
          items left
        </p>
        <div className="moreFuncs__filters">
          <a
            href="/"
            className={
              'filters__link ' +
              (pathName !== '/active' && pathName !== '/completed'
                ? 'active'
                : '')
            }
          >
            All
          </a>
          <a
            href="/active"
            className={
              'filters__link ' + (pathName === '/active' ? 'active' : '')
            }
          >
            Active
          </a>
          <a
            href="/completed"
            className={
              'filters__link ' + (pathName === '/completed' ? 'active' : '')
            }
          >
            Completed
          </a>
        </div>
        <a href="#" className="moreFuncs__clear" onClick={handleClick}>
          Clear Completed
        </a>
      </div>
    </section>
  ) : props.filter === 'activeTodos' ? (
    <section className="inputArea">
      <Input
        setTodos={props.setTodos}
        todos={props.todos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setCheckAll={setCheckAll}
        checkAll={checkAll}
      />
      <div
        className={
          'inputArea__todoItems ' + (props.todos.length !== 0 ? 'active' : '')
        }
      >
        {props.todos
          .filter((item: Item) => item.isDone === false)
          .map((item: Item) => {
            return (
              <TodoItem
                key={JSON.stringify(item.id)}
                id={item.id}
                text={item.title}
                isDone={item.isDone}
                todos={props.todos}
                setTodos={props.setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                itemsLeft={itemsLeft}
                checkAll={checkAll}
              />
            );
          })}
      </div>
      <div className="inputArea__moreFuncs">
        <p className="moreFuncs__itemsCounter">
          {itemsLeft + ' '}
          items left
        </p>
        <div className="moreFuncs__filters">
          <a
            href="/"
            className={
              'filters__link ' +
              (pathName !== '/active' && pathName !== '/completed'
                ? 'active'
                : '')
            }
          >
            All
          </a>
          <a
            href="/active"
            className={
              'filters__link ' + (pathName === '/active' ? 'active' : '')
            }
          >
            Active
          </a>
          <a
            href="/completed"
            className={
              'filters__link ' + (pathName === '/completed' ? 'active' : '')
            }
          >
            Completed
          </a>
        </div>
        <a href="#" className="moreFuncs__clear" onClick={handleClick}>
          Clear Completed
        </a>
      </div>
    </section>
  ) : (
    <section className="inputArea">
      <Input
        setTodos={props.setTodos}
        todos={props.todos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setCheckAll={setCheckAll}
        checkAll={checkAll}
      />
      <div
        className={
          'inputArea__todoItems ' + (props.todos.length !== 0 ? 'active' : '')
        }
      >
        {props.todos
          .filter((item: Item) => item.isDone === true)
          .map((item: Item) => {
            return (
              <TodoItem
                key={JSON.stringify(item.id)}
                id={item.id}
                text={item.title}
                isDone={item.isDone}
                todos={props.todos}
                setTodos={props.setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                itemsLeft={itemsLeft}
                checkAll={checkAll}
              />
            );
          })}
      </div>
      <div className="inputArea__moreFuncs">
        <p className="moreFuncs__itemsCounter">
          {itemsLeft + ' '}
          items left
        </p>
        <div className="moreFuncs__filters">
          <a
            href="/"
            className={
              'filters__link ' +
              (pathName !== '/active' && pathName !== '/completed'
                ? 'active'
                : '')
            }
          >
            All
          </a>
          <a
            href="/active"
            className={
              'filters__link ' + (pathName === '/active' ? 'active' : '')
            }
          >
            Active
          </a>
          <a
            href="/completed"
            className={
              'filters__link ' + (pathName === '/completed' ? 'active' : '')
            }
          >
            Completed
          </a>
        </div>
        <a href="#" className="moreFuncs__clear" onClick={handleClick}>
          Clear Completed
        </a>
      </div>
    </section>
  );
}
