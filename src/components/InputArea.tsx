/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Item } from '../types/ItemsType';
import Input from './Input';
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';
import InputAreaProps from '../types/InputAreaProps';

export default function InputArea(props: InputAreaProps) {
  const [editTodo, setEditTodo] = useState({
    id: '',
    title: '',
    isDone: false,
  });
  const [itemsLeft, setItemsLeft] = useState(0);
  const [checkAll, setCheckAll] = useState('');

  const handleClick = (event: React.SyntheticEvent<EventTarget>): void => {
    const target = event.target as HTMLElement;
    if (target.className.includes('moreFuncs__clear')) {
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

  return (
    <section className="container__inputArea">
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
          {props.filter !== 'completed' && props.filter !== 'active'
            ? props.todos.map((item: Item) => {
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
                    setCheckAll={setCheckAll}
                  />
                );
              })
            : props.filter === 'active'
            ? props.todos
                .filter((todo: Item) => todo.isDone === false)
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
                      setCheckAll={setCheckAll}
                    />
                  );
                })
            : props.todos
                .filter((todo: Item) => todo.isDone === true)
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
                      setCheckAll={setCheckAll}
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
            <Link
              className={
                'filters__link ' +
                (pathName !== '/active' && pathName !== '/completed'
                  ? 'active'
                  : '')
              }
              to="/"
              state={{ passedTodos: props.todos }}
            >
              All
            </Link>
            <Link
              className={
                'filters__link ' + (pathName === '/active' ? 'active' : '')
              }
              to="/active"
              state={{ passedTodos: props.todos }}
            >
              Active
            </Link>
            <Link
              className={
                'filters__link ' + (pathName === '/completed' ? 'active' : '')
              }
              to="/completed"
              state={{ passedTodos: props.todos }}
            >
              Completed
            </Link>
          </div>
          <a
            href="#"
            className={
              'moreFuncs__clear ' +
              (props.todos.find((todo: Item) => todo.isDone === true)
                ? 'active'
                : '')
            }
            onClick={handleClick}
          >
            Clear Completed
          </a>
        </div>
        <div className="inputArea__paper one"></div>
        <div className="inputArea__paper two"></div>
      </section>
    </section>
  );
}
