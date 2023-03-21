import Image from 'next/image';
import React from 'react';

import styles from './RemoveTodo.module.scss';

interface RemoveTodoProps {
  disabled: boolean;
  handleDelete: () => void;
}

const RemoveTodo = ({ handleDelete, disabled }: RemoveTodoProps) => (
  <button
    type="button"
    className={styles.root}
    onClick={!disabled ? handleDelete : () => {}}
    disabled={disabled}
  >
    <Image
      src="assets/svg/icon-cross.svg"
      alt="close button"
      width={20}
      height={20}
    />
  </button>
);

export default RemoveTodo;
