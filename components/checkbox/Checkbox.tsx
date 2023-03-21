/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Todo } from '@/types/Todo';

import styles from './Checkbox.module.scss';

interface CheckboxProps extends Todo {
  setCompleted: () => void;
}

const Checkbox = ({ id, completed, setCompleted }: CheckboxProps) => (
  // const checkboxHandler = () => {
  //   setIsCompleted((v) => !v);
  // };

  <div className={styles.root}>
    <input
      type="checkbox"
      id={`todo-${id}`}
      name={`todo-${id}`}
      className={styles.input}
      checked={completed}
      onChange={setCompleted}
    />
    <label htmlFor={`todo-${id}`} className={styles.label} />
  </div>
);
export default Checkbox;
