'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import CustomButton from '../customButton/CustomButton';

import styles from './Filter.module.scss';

// filters

type FilterItem = {
  id: number;
  text: string;
};

const filters: FilterItem[] = [
  { id: 1, text: 'All' },
  { id: 2, text: 'Active' },
  { id: 3, text: 'Completed' },
];

const Filter = () => {
  const [active, setActive] = React.useState(1);
  const router = useRouter();

  const buttonHandler = (id: number, param: string) => {
    setActive(id);
    switch (param) {
      case 'Active':
        router.push(`?filter=${param.toLowerCase()}`);
        break;
      case 'Completed':
        router.push(`?filter=${param.toLowerCase()}`);
        break;
      default:
        router.push('/');
        break;
    }
  };

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {filters.map((f) => (
          <li key={f.id}>
            <CustomButton
              color={f.id === active ? 'primary' : 'secondary'}
              disabled={f.id === active}
              onClick={() => buttonHandler(f.id, f.text)}
            >
              {f.text}
            </CustomButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
