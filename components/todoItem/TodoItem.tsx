'use client';

import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { MoonLoader } from 'react-spinners';
import { Todo } from '@/types/Todo';
import Checkbox from '../checkbox';
import RemoveTodo from '../removeTodo';
import styles from './TodoItem.module.scss';
import { deleteTodo, toggleTodo } from '@/lib';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFeching, setIsFeching] = useState<boolean>(false);

  const isToggleTodo = isFeching || isPending;

  const handleChange = async () => {
    setIsFeching(true);
    await toggleTodo(todo.id, todo.completed);
    setIsFeching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  const handleDelete = async () => {
    setIsFeching(true);
    await deleteTodo(todo.id);
    setIsFeching(false);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <li className={`${styles.root} ${isToggleTodo && styles.loading}`}>
      <div className={styles.content}>
        {isToggleTodo ? (
          <div style={{ marginRight: '20px' }}>
            <MoonLoader size={18.5} color="var(--text-color)" />
          </div>
        ) : (
          <Checkbox
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            setCompleted={handleChange}
          />
        )}
        <span className={!todo.completed ? styles.active : styles.completed}>
          {todo.title}
        </span>
      </div>
      <RemoveTodo handleDelete={handleDelete} disabled={isToggleTodo} />
    </li>
  );
};

export default TodoItem;
