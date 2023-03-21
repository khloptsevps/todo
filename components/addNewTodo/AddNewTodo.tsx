'use client';

import React, { ChangeEvent, KeyboardEvent, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { MoonLoader } from 'react-spinners';
import styles from './AddNewTodo.module.scss';
import { addNewTodo } from '@/lib';

export const AddNewTodo = () => {
  const router = useRouter();
  const [value, setValue] = React.useState<string>('');
  const [isFeching, setIsFeching] = React.useState<boolean>(false);
  const [isPending, startTransition] = useTransition();

  const isMutating = isFeching || isPending;

  const inputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (!value) inputRef.current?.focus();
  }, [value]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeydown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && value) {
      setIsFeching(true);
      await addNewTodo(value);
      setIsFeching(false);
      startTransition(() => {
        setValue('');
        router.refresh();
      });
    }
  };

  return (
    <div className={`${styles.root} ${isMutating && styles.loading}`}>
      {isMutating ? (
        <div
          style={{
            marginRight: '9px',
            marginLeft: '18px',
          }}
        >
          <MoonLoader size={18.5} color="var(--text-color)" />
        </div>
      ) : (
        <div className={styles.circle} />
      )}
      <div className={styles.container}>
        <input
          ref={inputRef}
          className={`${styles.input} ${isMutating && styles.loading}`}
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={inputHandler}
          onKeyDown={handleKeydown}
          disabled={isMutating}
        />
      </div>
    </div>
  );
};
