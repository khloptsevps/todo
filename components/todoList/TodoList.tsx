import React from 'react';
import TodoItem from '@/components/todoItem';

import { Count } from '../count';

import styles from './TodoList.module.scss';
import { Todo } from '@/types/Todo';
import Filter from '../filter/Filter';

interface TodoListProps {
  todos: Promise<Todo[]>;
  filter: 'active' | 'completed' | null;
}

export const TodoList = async ({ todos, filter }: TodoListProps) => {
  const todosData = await todos;

  const filterCb = (todo: Todo) => {
    if (filter === 'completed') {
      return todo.completed;
    }
    if (filter === 'active') {
      return !todo.completed;
    }
    return true;
  };

  return (
    <div className={styles.root}>
      <div className="todos">
        <ul className="todoslist">
          {todosData
            .reverse()
            .filter(filterCb)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
      </div>
      <div className={styles.controls}>
        <Count count={todosData.filter((t) => !t.completed).length} />
        <Filter />
      </div>
    </div>
  );
};
